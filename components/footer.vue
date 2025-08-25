<template>
  <footer class="bg-gradient-to-b from-white to-pink-50 dark:from-gray-900 dark:to-purple-900/10 shadow-inner mt-20 transition-colors duration-300 border-t border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand Info -->
        <div class="md:col-span-1">
          <NuxtLink to="/" class="flex items-center mb-4">
            <!-- <img
              src="/assets/images/logo.png"
              alt="Fantasyworld Logo"
              class="h-10 w-auto mr-2"
            /> -->
            <span class="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent dark:from-pink-400 dark:to-purple-400">
              Fantasyworld
            </span>
          </NuxtLink>
          <p class="text-gray-600 dark:text-gray-300 text-sm">
            Your premier destination for sensual exploration and intimate pleasure. Discreet shipping worldwide.
          </p>
          
          <div class="mt-6 flex space-x-4">
            <a
              href="https://wa.me/254702943693"
              target="_blank"
              class="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              aria-label="WhatsApp"
            >
              <Icon name="ph:whatsapp-logo" class="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/254702943693?text=I'd like to know more about FantasyWorld products"
              target="_blank"
              class="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              aria-label="Contact"
            >
              <Icon name="ph:phone" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Explore
          </h3>
          <ul class="space-y-3">
            <li v-for="link in exploreLinks" :key="link.name">
              <a
                :href="link.path"
                target="_blank"
                class="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors text-sm flex items-center"
              >
                <Icon :name="link.icon" class="w-4 h-4 mr-2" />
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Customer Care -->
        <div>
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Customer Care
          </h3>
          <ul class="space-y-3">
            <li v-for="link in customerLinks" :key="link.name">
              <a
                :href="link.path"
                target="_blank"
                class="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors text-sm flex items-center"
              >
                <Icon :name="link.icon" class="w-4 h-4 mr-2" />
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Contact Us
          </h3>
          <ul class="space-y-3">
            <li class="flex items-start text-gray-600 dark:text-gray-300 text-sm">
              <Icon name="ph:phone" class="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p>+254 702 943 693</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">Mon-Fri, 9am-5pm</p>
              </div>
            </li>
            <li class="flex items-start text-gray-600 dark:text-gray-300 text-sm">
              <Icon name="ph:whatsapp-logo" class="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p>WhatsApp: +254 702 943 693</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">24/7 Support</p>
              </div>
            </li>
            <li class="flex items-start text-gray-600 dark:text-gray-300 text-sm">
              <Icon name="ph:map-pin" class="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p>Nairobi, Kenya</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">Discreet Worldwide Shipping</p>
              </div>
            </li>
          </ul>

          <div class="mt-6">
            <h4 class="text-sm font-medium text-gray-800 dark:text-white mb-2">Secure Payments</h4>
            <div class="flex space-x-2">
              <Icon name="simple-icons:visa" class="w-8 h-5" />
              <Icon name="simple-icons:mastercard" class="w-8 h-5" />
              <Icon name="simple-icons:paypal" class="w-8 h-5" />
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <div class="flex flex-col md:flex-row justify-between items-center text-center">
          <p class="text-gray-600 dark:text-gray-300 text-sm order-2 md:order-1 mt-4 md:mt-0">
            &copy; {{ new Date().getFullYear() }} Fantasyworld. All rights reserved.
          </p>
          
          <div class="flex space-x-6 order-1 md:order-2">
            <a 
              href="https://wa.me/254702943693?text=I'd like to know about privacy policy"
              target="_blank"
              class="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a 
              href="https://wa.me/254702943693?text=I'd like to know about terms of service"
              target="_blank"
              class="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors text-sm"
            >
              Terms of Service
            </a>
            <a 
              href="https://wa.me/254702943693?text=I'd like to know about adult content disclaimer"
              target="_blank"
              class="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors text-sm"
            >
              Adult Content Disclaimer
            </a>
          </div>
        </div>
        
        <div class="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
          <p>Fantasyworld is an adults-only (18+) retailer. All models are 18+ years of age.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const exploreLinks = [
  { name: "New Arrivals", path: "https://wa.me/254702943693?text=I'd like to see new arrivals from FantasyWorld", icon: "ph:sparkle" },
  { name: "Best Sellers", path: "https://wa.me/254702943693?text=I'd like to see best sellers from FantasyWorld", icon: "ph:crown" },
  { name: "Luxury Collection", path: "https://wa.me/254702943693?text=I'd like to see luxury collection from FantasyWorld", icon: "ph:gem" },
  { name: "Couples Toys", path: "https://wa.me/254702943693?text=I'd like to see couples toys from FantasyWorld", icon: "ph:heart" },
  { name: "Accessories", path: "https://wa.me/254702943693?text=I'd like to see accessories from FantasyWorld", icon: "ph:magic-wand" },
];

const customerLinks = [
  { name: "Shipping Policy", path: "https://wa.me/254702943693?text=I'd like to know about shipping policy", icon: "ph:package" },
  { name: "Returns & Exchanges", path: "https://wa.me/254702943693?text=I'd like to know about returns and exchanges", icon: "ph:arrow-counter-clockwise" },
  { name: "Product Care", path: "https://wa.me/254702943693?text=I'd like to know about product care", icon: "ph:drop" },
  { name: "FAQ", path: "https://wa.me/254702943693?text=I have a question about FantasyWorld products", icon: "ph:question" },
  { name: "Contact Support", path: "https://wa.me/254702943693?text=I need support with my FantasyWorld order", icon: "ph:headset" },
];
</script>