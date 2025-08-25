<template>
  <div>
    <!-- Hero Section -->
    <HeroSection 
      title="Reputation Management Resources"
      description="Expert insights, tips, and strategies to help you build and protect your business reputation"
    />

    <!-- Featured Article -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <div class="flex items-center mb-4">
              <span class="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">Featured</span>
            </div>
            <h2 class="text-3xl font-bold mb-4">
              The Complete Guide to Online Reputation Management in 2024
            </h2>
            <p class="text-blue-100 mb-6 text-lg">
              Learn the essential strategies and tools every business needs to manage their online reputation effectively in today's digital landscape.
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div class="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                  <span class="text-white font-bold">RP</span>
                </div>
                <div>
                  <div class="font-semibold">RepuPro Team</div>
                  <div class="text-blue-100 text-sm">January 15, 2024 • 8 min read</div>
                </div>
              </div>
              <NuxtLink
                to="/blog/complete-guide-online-reputation-management-2024"
                class="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Read Article
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Categories -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Browse by Category
          </h2>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="selectedCategory = category.id"
            :class="[
              'p-4 rounded-lg text-center transition-colors',
              selectedCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700'
            ]"
          >
            <div class="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <component :is="category.icon" class="w-6 h-6" />
            </div>
            <div class="font-medium">{{ category.name }}</div>
            <div class="text-sm opacity-75">{{ category.count }} articles</div>
          </button>
        </div>
      </div>
    </section>

    <!-- Blog Articles -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white">
            Latest Articles
          </h2>
          <div class="flex space-x-2">
            <button
              @click="sortBy = 'date'"
              :class="[
                'px-4 py-2 rounded-lg transition-colors',
                sortBy === 'date'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              ]"
            >
              Latest
            </button>
            <button
              @click="sortBy = 'popular'"
              :class="[
                'px-4 py-2 rounded-lg transition-colors',
                sortBy === 'popular'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              ]"
            >
              Popular
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="article in filteredArticles"
            :key="article.id"
            class="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-shadow"
          >
            <img
              :src="article.image"
              :alt="article.title"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <div class="flex items-center mb-3">
                <span
                  :class="[
                    'px-2 py-1 rounded-full text-xs font-medium',
                    getCategoryColor(article.category)
                  ]"
                >
                  {{ article.category }}
                </span>
                <span class="text-gray-500 dark:text-gray-400 text-sm ml-auto">
                  {{ article.readTime }} min read
                </span>
              </div>
              
              <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2">
                {{ article.title }}
              </h3>
              
              <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {{ article.excerpt }}
              </p>
              
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center mr-3">
                    <span class="text-gray-600 dark:text-gray-300 text-sm font-bold">{{ article.author.initials }}</span>
                  </div>
                  <div>
                    <div class="font-medium text-gray-800 dark:text-white text-sm">{{ article.author.name }}</div>
                    <div class="text-gray-500 dark:text-gray-400 text-xs">{{ article.date }}</div>
                  </div>
                </div>
                
                <NuxtLink
                  :to="article.slug"
                  class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
                >
                  Read More →
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12">
          <button
            @click="loadMore"
            class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Load More Articles
          </button>
        </div>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="py-16 bg-blue-600 dark:bg-blue-800">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">
          Stay Updated with Reputation Management Tips
        </h2>
        <p class="text-blue-100 mb-8 max-w-2xl mx-auto">
          Get the latest insights, strategies, and tips delivered to your inbox. Join thousands of business owners who trust our expertise.
        </p>
        
        <form @submit.prevent="subscribeNewsletter" class="max-w-md mx-auto">
          <div class="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              v-model="newsletterEmail"
              placeholder="Enter your email address"
              required
              class="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
            />
            <button
              type="submit"
              :disabled="isSubscribing"
              class="bg-white text-blue-600 hover:bg-gray-100 disabled:bg-gray-300 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              {{ isSubscribing ? 'Subscribing...' : 'Subscribe' }}
            </button>
          </div>
        </form>
        
        <p class="text-blue-100 text-sm mt-4">
          No spam, unsubscribe at any time. We respect your privacy.
        </p>
      </div>
    </section>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script>
export default {
  name: "BlogPage",
  data() {
    return {
      selectedCategory: 'all',
      sortBy: 'date',
      newsletterEmail: '',
      isSubscribing: false,
      selectedCategory: 'all',
      sortBy: 'date',
      newsletterEmail: '',
      isSubscribing: false,
      categories: [
        { id: 'all', name: 'All Posts', count: 24, icon: 'DocumentIcon' },
        { id: 'reputation', name: 'Reputation Management', count: 8, icon: 'ShieldCheckIcon' },
        { id: 'reviews', name: 'Review Management', count: 6, icon: 'StarIcon' },
        { id: 'seo', name: 'Local SEO', count: 5, icon: 'SearchIcon' },
        { id: 'tips', name: 'Business Tips', count: 5, icon: 'LightBulbIcon' }
      ],
      articles: [
        {
          id: 1,
          title: "How to Respond to Negative Reviews: A Complete Guide",
          excerpt: "Learn the best practices for responding to negative reviews professionally and effectively to protect your business reputation.",
          category: "Review Management",
          categoryId: "reviews",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          date: "Jan 20, 2024",
          readTime: 6,
          author: { name: "Sarah Johnson", initials: "SJ" },
          slug: "/blog/how-to-respond-negative-reviews-guide"
        },
        {
          id: 2,
          title: "10 Local SEO Strategies That Actually Work in 2024",
          excerpt: "Discover proven local SEO techniques that will help your business rank higher in local search results and attract more customers.",
          category: "Local SEO",
          categoryId: "seo",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          date: "Jan 18, 2024",
          readTime: 8,
          author: { name: "Mike Chen", initials: "MC" },
          slug: "/blog/local-seo-strategies-2024"
        },
        {
          id: 3,
          title: "The Psychology Behind Customer Reviews: Why They Matter",
          excerpt: "Understanding the psychological factors that influence customer reviews and how to leverage them for your business success.",
          category: "Reputation Management",
          categoryId: "reputation",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          date: "Jan 15, 2024",
          readTime: 7,
          author: { name: "Lisa Rodriguez", initials: "LR" },
          slug: "/blog/psychology-customer-reviews"
        },
        {
          id: 4,
          title: "Building Trust Online: Essential Strategies for Small Businesses",
          excerpt: "Practical tips and strategies for small businesses to build trust and credibility in the digital marketplace.",
          category: "Business Tips",
          categoryId: "tips",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          date: "Jan 12, 2024",
          readTime: 5,
          author: { name: "David Thompson", initials: "DT" },
          slug: "/blog/building-trust-online-small-businesses"
        },
        {
          id: 5,
          title: "Google My Business Optimization: Complete Checklist",
          excerpt: "A comprehensive checklist to optimize your Google My Business profile and improve your local search visibility.",
          category: "Local SEO",
          categoryId: "seo",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          date: "Jan 10, 2024",
          readTime: 9,
          author: { name: "Amanda Wilson", initials: "AW" },
          slug: "/blog/google-my-business-optimization-checklist"
        },
        {
          id: 6,
          title: "Crisis Management: Handling Reputation Emergencies",
          excerpt: "Step-by-step guide on how to handle reputation crises and protect your brand during challenging times.",
          category: "Reputation Management",
          categoryId: "reputation",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          date: "Jan 8, 2024",
          readTime: 10,
          author: { name: "Robert Kim", initials: "RK" },
          slug: "/blog/crisis-management-reputation-emergencies"
        }
      ]
    };
  },
  computed: {
    filteredArticles() {
      let filtered = this.articles;
      
      if (this.selectedCategory !== 'all') {
        filtered = filtered.filter(article => article.categoryId === this.selectedCategory);
      }
      
      if (this.sortBy === 'popular') {
        // In a real app, you'd sort by actual popularity metrics
        filtered = [...filtered].sort((a, b) => b.readTime - a.readTime);
      } else {
        filtered = [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));
      }
      
      return filtered;
    }
  },
  methods: {
    getCategoryColor(category) {
      const colors = {
        'Reputation Management': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
        'Review Management': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
        'Local SEO': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
        'Business Tips': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
      };
      return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    },
    loadMore() {
      // In a real app, this would load more articles from an API
      alert('Loading more articles...');
    },
    async subscribeNewsletter() {
      this.isSubscribing = true;
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Thank you for subscribing! You will receive our latest insights soon.');
      this.newsletterEmail = '';
      this.isSubscribing = false;
    }
  }
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
