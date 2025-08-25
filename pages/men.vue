<template>
  <div>
    <Navbar />

    <!-- Hero Section -->
    <section
      class="relative bg-gradient-to-r from-blue-900 to-purple-800 text-white py-24 md:py-32"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Men's <span class="text-blue-300">Essentials</span> Collection
          </h1>
          <p class="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Premium products designed to enhance male pleasure and performance
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
          Shop By Category
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
    <section class="py-16 bg-blue-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white">
            Top Products
          </h2>
          <a
            href="https://wa.me/254702943693?text=I'd like to see all men's products from FantasyWorld"
            target="_blank"
            class="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            View All
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProductCard
            v-for="product in mensProducts"
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
          Engineered For His Pleasure
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="bg-blue-50 dark:bg-gray-800 p-8 rounded-xl text-center"
          >
            <div
              class="bg-blue-100 dark:bg-gray-700 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6"
            >
              <Icon
                :name="feature.icon"
                class="w-8 h-8 text-blue-600 dark:text-blue-400"
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
    name: "Sleeves",
    whatsappLink: "https://wa.me/254702943693?text=I'm interested in sleeves from FantasyWorld",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Strokers",
    whatsappLink: "https://wa.me/254702943693?text=I'm interested in strokers from FantasyWorld",
    image:
      "https://images.unsplash.com/photo-1616486334851-f8b8742f1b1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Rings",
    whatsappLink: "https://wa.me/254702943693?text=I'm interested in cock rings from FantasyWorld",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Performance",
    whatsappLink: "https://wa.me/254702943693?text=I'm interested in performance products from FantasyWorld",
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
];

const mensProducts = [
  {
    id: 1,
    name: "Auto-Stroker",
    description: "Hands-free experience with adjustable suction and vibration",
    price: 119.99,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Pleasure Ring",
    description: "Dual vibrating cock ring for enhanced performance",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Performance Serum",
    description: "Delay cream with natural ingredients for extended pleasure",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Silicone Sleeve",
    description: "Realistic texture with suction control valve",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1616486334851-f8b8742f1b1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
];

const features = [
  {
    title: "Premium Materials",
    description: "Medical-grade silicone and body-safe TPE for all products",
    icon: "ph:shield-check",
  },
  {
    title: "100% Discreet",
    description: "Plain packaging with no reference to adult content",
    icon: "ph:lock",
  },
  {
    title: "Satisfaction Guaranteed",
    description: "30-day returns on all unopened products",
    icon: "ph:medal",
  },
];
</script>
