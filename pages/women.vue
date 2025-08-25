<template>
  <div>
    <Navbar />

    <!-- Hero Section -->
    <section
      class="relative bg-gradient-to-r from-pink-900 to-purple-800 text-white py-24 md:py-32"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Women's <span class="text-pink-300">Pleasure</span> Collection
          </h1>
          <p class="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Curated for her pleasure - discover toys designed with women's
            anatomy and desires in mind
          </p>
        </div>
      </div>
    </section>

    <!-- Featured Categories -->
    <section class="py-16 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Explore Categories
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <a
            v-for="category in categories"
            :key="category.name"
            :href="category.whatsappLink"
            target="_blank"
            class="group relative overflow-hidden rounded-xl shadow-md h-48"
          >
            <img
              :src="category.image"
              :alt="category.name"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6"
            >
              <h3 class="text-xl font-bold text-white">
                {{ category.name }}
              </h3>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Best Sellers -->
    <section class="py-16 bg-pink-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white">
            Best Sellers
          </h2>
          <a
            href="https://wa.me/254702943693?text=I'd like to see all women's products from FantasyWorld"
            target="_blank"
            class="text-pink-600 dark:text-pink-400 hover:underline font-medium"
          >
            View All
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProductCard
            v-for="product in womensProducts"
            :key="product.id"
            :product="product"
            class="hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>
    </section>

    <!-- Features/Benefits -->
    <section class="py-16 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Designed For Her Pleasure
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="bg-pink-50 dark:bg-gray-800 p-8 rounded-xl text-center"
          >
            <div
              class="bg-pink-100 dark:bg-gray-700 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6"
            >
              <Icon
                :name="feature.icon"
                class="w-8 h-8 text-pink-600 dark:text-pink-400"
              />
            </div>
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-3">
              {{ feature.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const categories = [
  {
    name: "Vibrators",
    whatsappLink: "https://wa.me/254702943693?text=I'm interested in vibrators from FantasyWorld",
    image:
      "https://plus.unsplash.com/premium_photo-1700601156496-55d95edf68fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Dildos",
    whatsappLink: "https://wa.me/254702943693?text=I'm interested in dildos from FantasyWorld",
    image:
      "https://plus.unsplash.com/premium_photo-1700600258977-0321b0f8dc5f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Kits",
    whatsappLink: "https://wa.me/254702943693?text=I'm interested in pleasure kits from FantasyWorld",
    image:
      "https://images.unsplash.com/photo-1648550443002-c84f673d62d9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Lingerie",
    whatsappLink: "https://wa.me/254702943693?text=I'm interested in lingerie from FantasyWorld",
    image:
      "https://images.unsplash.com/photo-1568441556126-f36ae0900180?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const womensProducts = [
  {
    id: 1,
    name: "Rose Clitoral Stimulator",
    description:
      "Whisper-quiet suction toy with 6 intensity levels for targeted pleasure",
    price: 79.99,
    image:
      "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/113585/1.jpg?7579",
  },
  {
    id: 2,
    name: "G-Spot Vibrator",
    description: "Curved design with dual motors for blended orgasms",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Silk Robe & Lingerie Set",
    description: "Luxury charmeuse silk robe with matching lace lingerie",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Couples Massage Oil",
    description: "Warming sensation oil with edible strawberry flavor",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
];

const features = [
  {
    title: "Body-Safe Materials",
    description:
      "All products made from medical-grade silicone and non-toxic materials",
    icon: "ph:heart",
  },
  {
    title: "Discreet Packaging",
    description: "Plain packaging with no indication of contents",
    icon: "ph:package",
  },
  {
    title: "Satisfaction Guarantee",
    description: "30-day money back guarantee on all products",
    icon: "ph:star",
  },
];
</script>
