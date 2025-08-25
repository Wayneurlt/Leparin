<template>
  <div>
    <AppHeader />
    
    <!-- Hero Section -->
    <HeroSection 
      title="Client Testimonials"
      description="See what our clients say about our reputation management services. Real results from real businesses."
    />

    <!-- Stats Section -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
            <div class="text-gray-600 dark:text-gray-300">Happy Clients</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">10,000+</div>
            <div class="text-gray-600 dark:text-gray-300">Positive Reviews</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">95%</div>
            <div class="text-gray-600 dark:text-gray-300">Success Rate</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">12+</div>
            <div class="text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Testimonials -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Featured Success Stories
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Real results from real businesses we've helped
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div class="flex items-center mb-6">
              <div class="flex text-yellow-400">
                <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-6 italic">
              "RepuPro completely transformed our online reputation. We went from having a 2.8-star rating to 4.7 stars in just 3 months. Our business has seen a 40% increase in new customers since working with them."
            </p>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                <span class="text-blue-600 dark:text-blue-400 font-bold text-lg">S</span>
              </div>
              <div>
                <div class="font-semibold text-gray-800 dark:text-white">Sarah Johnson</div>
                <div class="text-gray-600 dark:text-gray-300 text-sm">Restaurant Owner, Downtown Bistro</div>
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div class="flex items-center mb-6">
              <div class="flex text-yellow-400">
                <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-6 italic">
              "After a competitor left us fake negative reviews, our business was suffering. RepuPro not only helped remove the fake reviews but also built up our positive reputation. We're now ranking higher than ever before."
            </p>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
                <span class="text-green-600 dark:text-green-400 font-bold text-lg">M</span>
              </div>
              <div>
                <div class="font-semibold text-gray-800 dark:text-white">Mike Chen</div>
                <div class="text-gray-600 dark:text-gray-300 text-sm">CEO, TechStart Solutions</div>
              </div>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div class="flex items-center mb-6">
              <div class="flex text-yellow-400">
                <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-6 italic">
              "The team at RepuPro is professional, responsive, and truly cares about their clients' success. They helped us improve our local SEO and get listed on all the right directories. Our phone hasn't stopped ringing!"
            </p>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-4">
                <span class="text-purple-600 dark:text-purple-400 font-bold text-lg">L</span>
              </div>
              <div>
                <div class="font-semibold text-gray-800 dark:text-white">Lisa Rodriguez</div>
                <div class="text-gray-600 dark:text-gray-300 text-sm">Owner, Beauty & Wellness Spa</div>
              </div>
            </div>
          </div>

          <!-- Testimonial 4 -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div class="flex items-center mb-6">
              <div class="flex text-yellow-400">
                <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-6 italic">
              "We were struggling with negative reviews from a disgruntled former employee. RepuPro helped us address the situation professionally and rebuild our reputation. The results exceeded our expectations."
            </p>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mr-4">
                <span class="text-orange-600 dark:text-orange-400 font-bold text-lg">D</span>
              </div>
              <div>
                <div class="font-semibold text-gray-800 dark:text-white">David Thompson</div>
                <div class="text-gray-600 dark:text-gray-300 text-sm">Managing Partner, Thompson Law</div>
              </div>
            </div>
          </div>

          <!-- Testimonial 5 -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div class="flex items-center mb-6">
              <div class="flex text-yellow-400">
                <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-6 italic">
              "As a small business, we couldn't afford to lose customers due to poor online reviews. RepuPro helped us establish a strong online presence and now we're getting more referrals than ever before."
            </p>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mr-4">
                <span class="text-red-600 dark:text-red-400 font-bold text-lg">A</span>
              </div>
              <div>
                <div class="font-semibold text-gray-800 dark:text-white">Amanda Wilson</div>
                <div class="text-gray-600 dark:text-gray-300 text-sm">Owner, Wilson's Auto Repair</div>
              </div>
            </div>
          </div>

          <!-- Testimonial 6 -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div class="flex items-center mb-6">
              <div class="flex text-yellow-400">
                <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-6 italic">
              "The monitoring service has been invaluable. We get instant alerts when new reviews are posted, allowing us to respond quickly and maintain our excellent reputation. Highly recommended!"
            </p>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mr-4">
                <span class="text-teal-600 dark:text-teal-400 font-bold text-lg">R</span>
              </div>
              <div>
                <div class="font-semibold text-gray-800 dark:text-white">Robert Kim</div>
                <div class="text-gray-600 dark:text-gray-300 text-sm">Manager, Kim's Dental Practice</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Studies -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Detailed Case Studies
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            In-depth look at how we've helped businesses achieve remarkable results
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Case Study 1 -->
          <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-8">
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Restaurant Recovery Success</h3>
            <div class="mb-6">
              <div class="flex items-center mb-4">
                <span class="text-2xl font-bold text-green-600 dark:text-green-400 mr-2">2.8</span>
                <span class="text-gray-600 dark:text-gray-300">→</span>
                <span class="text-2xl font-bold text-green-600 dark:text-green-400 ml-2">4.7</span>
                <span class="text-gray-600 dark:text-gray-300 ml-2">stars</span>
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-300">Achieved in 3 months</div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Downtown Bistro was struggling with negative reviews and declining customers. We implemented a comprehensive reputation management strategy including review generation, negative review response, and local SEO optimization.
            </p>
            <div class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <div>• Generated 50+ positive reviews across platforms</div>
              <div>• Improved local search rankings by 300%</div>
              <div>• Increased customer inquiries by 40%</div>
              <div>• Reduced negative review impact by 80%</div>
            </div>
          </div>

          <!-- Case Study 2 -->
          <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-8">
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Tech Startup Crisis Management</h3>
            <div class="mb-6">
              <div class="flex items-center mb-4">
                <span class="text-2xl font-bold text-red-600 dark:text-red-400 mr-2">1.2</span>
                <span class="text-gray-600 dark:text-gray-300">→</span>
                <span class="text-2xl font-bold text-green-600 dark:text-green-400 ml-2">4.5</span>
                <span class="text-gray-600 dark:text-gray-300 ml-2">stars</span>
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-300">Achieved in 4 months</div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              TechStart Solutions faced a reputation crisis after fake negative reviews from a competitor. We helped remove the fake reviews and built a strong positive reputation through legitimate review generation and content creation.
            </p>
            <div class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <div>• Removed 15 fake negative reviews</div>
              <div>• Generated 75+ authentic positive reviews</div>
              <div>• Improved search result rankings</div>
              <div>• Restored investor confidence</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-blue-600 dark:bg-blue-800">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">
          Ready to Join Our Success Stories?
        </h2>
        <p class="text-blue-100 mb-8 max-w-2xl mx-auto">
          Don't let poor online reviews hold your business back. Join hundreds of satisfied clients who have transformed their online reputation with RepuPro.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Get Started Today
          </NuxtLink>
          <NuxtLink
            to="/services"
            class="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors"
          >
            View Our Services
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script>
export default {
  name: "TestimonialsPage"
};
</script>
