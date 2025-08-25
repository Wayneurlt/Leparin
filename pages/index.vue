<template>
  <div class="bg-black text-white min-h-screen">
    <Navbar />

    <!-- Sensual Hero Section -->
    <section
      class="relative bg-gradient-to-br from-purple-900 via-pink-800 to-red-900 overflow-hidden"
    >
      <div class="absolute inset-0 opacity-50">
        <div
          class="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1714163400262-159571dafbda?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] opacity-20"
        ></div>
      </div>

      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10"
      >
        <div class="flex flex-col lg:flex-row items-center">
          <div class="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            <h1
              class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400"
                >Ignite Your</span>
                <br />
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
                >Passion Tonight</span
              >
            </h1>
            <p
              class="text-xl md:text-2xl text-pink-200 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Curated collection of premium pleasure products for unforgettable
              experiences
            </p>
            <div
              class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <NuxtLink
                to="/products"
                class="bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/50 text-center"
              >
                Explore Collection
              </NuxtLink>
              <a
                href="https://wa.me/254702943693?text=I'm interested in couples toys from FantasyWorld"
                target="_blank"
                class="border-2 border-white/30 hover:border-pink-400 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:text-pink-300 text-center"
              >
                For Couples
              </a>
            </div>
          </div>

          <div class="lg:w-1/2 relative">
            <div class="relative max-w-md mx-auto">
              <!-- Sensual product display with floating elements -->
              <img
                src="https://plus.unsplash.com/premium_photo-1700601019712-e84e1e6e061c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Luxury adult products"
                class="rounded-xl shadow-2xl w-full relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500 border-2 border-pink-500/20"
              />

              <!-- Floating decorative elements -->
              <div
                class="absolute -top-4 -left-4 w-16 h-16 bg-pink-500 rounded-full opacity-30 blur-md z-0"
              ></div>
              <div
                class="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-500 rounded-full opacity-30 blur-md z-0"
              ></div>

              <!-- Floating tag -->
              <div
                class="absolute -bottom-4 -right-4 bg-gradient-to-br from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg shadow-xl z-20 transform rotate-3 hover:rotate-0 transition-transform duration-300 flex items-center"
              >
                <Icon name="ph:sparkle" class="mr-1 text-yellow-300" />
                <span class="font-bold">Bestseller</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products - Sensual Grid -->
    <section class="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400"
            >Curated For</span
          >
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
            >Your Pleasure</span
          >
        </h2>
        <p class="text-lg text-pink-200 text-center mb-12 max-w-2xl mx-auto">
          Hand-selected premium products designed to deliver unforgettable
          experiences
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="product in featuredProducts"
            :key="product.id"
            class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-pink-500/20 transition-all duration-300 group"
          >
            <div class="relative overflow-hidden h-64">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
              >
                <div
                  class="translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                >
                  <p class="text-pink-200">{{ product.description }}</p>
                </div>
              </div>
              <div
                class="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
              >
                ${{ product.price.toFixed(2) }}
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-white">
                {{ product.name }}
              </h3>
              <div class="flex justify-between items-center">
                <div class="flex items-center text-pink-400">
                  <Icon
                    name="ph:star"
                    class="mr-1"
                    v-for="n in 5"
                    :key="n"
                  />
                </div>
                              <a
                :href="generateWhatsAppLink(product)"
                target="_blank"
                class="flex items-center bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                <Icon name="ph:whatsapp-logo" class="mr-2" />
                Order Now
              </a>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <NuxtLink
            to="/products"
            class="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30"
          >
            View Full Collection
            <Icon name="ph:arrow-right" class="ml-2" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Sensual Benefits Section -->
    <section class="py-16 bg-black">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400"
              >Why Choose</span
            >
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
              >FantasyWorld?</span
            >
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-pink-500 transition-all duration-300"
          >
            <div
              class="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mb-6 mx-auto"
            >
              <Icon name="ph:lock" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold text-center text-white mb-4">
              Discreet Packaging
            </h3>
            <p class="text-gray-300 text-center">
              Your privacy is our priority. All orders shipped in plain
              packaging with no identifying labels.
            </p>
          </div>

          <div
            class="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300"
          >
            <div
              class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto"
            >
              <Icon name="ph:shield-check" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold text-center text-white mb-4">
              Body-Safe Materials
            </h3>
            <p class="text-gray-300 text-center">
              Only premium, non-toxic materials that are safe for intimate use.
            </p>
          </div>

          <div
            class="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-red-500 transition-all duration-300"
          >
            <div
              class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 mx-auto"
            >
              <Icon name="ph:heart-straight" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold text-center text-white mb-4">
              Satisfaction Guaranteed
            </h3>
            <p class="text-gray-300 text-center">
              30-day money back guarantee on all products if you're not
              completely satisfied.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sensual CTA Section -->
    <section
      class="py-20 bg-gradient-to-r from-purple-900 to-pink-900 relative overflow-hidden"
    >
      <div class="absolute inset-0 opacity-20">
        <div
          class="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1647998681311-390a8474174c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] opacity-30"
        ></div>
      </div>

      <div
        class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-red-300"
            >Elevate Your Experience</span
          >?
        </h2>
        <p class="text-xl text-pink-200 mb-8">
          Join thousands of satisfied customers who trust FantasyWorld for their
          intimate needs.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/products"
            class="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/20 text-center"
          >
            Shop Now
          </NuxtLink>
          <a
            href="https://wa.me/254702943693?text=I'd like to know more about FantasyWorld products and guides"
            target="_blank"
            class="border-2 border-white/40 hover:border-white text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:bg-white/10 text-center"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
const featuredProducts = [
  {
    id: 1,
    name: "Sensual Rose Vibrator",
    description:
      "Whisper-quiet luxury vibrator with 10 intensity levels for personalized pleasure.",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1721993728580-06bdb5db9a16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zZSUyMHZpYnJhdG9yfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Couples' Bondage Set",
    description:
      "Premium silk restraints and blindfold for sensual exploration between partners.",
    price: 129.99,
    image: "https://eroskenya.com/storage/2020/05/bdsm-3-510x510.jpg",
  },
  {
    id: 3,
    name: "Dual Stimulation Massager",
    description:
      "Simultaneous G-spot and clitoral stimulation with ergonomic design.",
    price: 109.99,
    image:
      "https://plus.unsplash.com/premium_photo-1700600265464-8c218020528d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const generateWhatsAppLink = (product) => {
  const phoneNumber = "254702943693"; // WhatsApp number for FantasyWorld
  const message = `I'm interested in ${product.name} ($${product.price.toFixed(2)}) from FantasyWorld`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};
</script>
