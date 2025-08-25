<template>
    <Navbar />
  <div
    class="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Contact Us
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have questions? We'd love to hear from you.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div class="bg-white dark:bg-black rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Get in Touch
            </h2>

            <div class="space-y-6">
              <div class="flex items-start">
                <div
                  class="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900 rounded-lg p-3"
                >
                  <Icon
                    icon="ph:phone"
                    class="h-6 w-6 text-indigo-600 dark:text-indigo-300"
                  />
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-800 dark:text-white">
                    Phone
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    +254 702 943 693
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div
                  class="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900 rounded-lg p-3"
                >
                  <Icon
                    icon="ph:envelope"
                    class="h-6 w-6 text-indigo-600 dark:text-indigo-300"
                  />
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-800 dark:text-white">
                    Email
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    WhatsApp: +254 702 943 693
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div
                  class="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900 rounded-lg p-3"
                >
                  <Icon
                    name="ph:map-pin"
                    class="h-6 w-6 text-indigo-600 dark:text-indigo-300"
                  />
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-800 dark:text-white">
                    Address
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    123 Business Center, Nairobi, Kenya
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-8">
              <h3
                class="text-lg font-medium text-gray-800 dark:text-white mb-4"
              >
                Follow Us
              </h3>
              <div class="flex space-x-4">
                <a
                  href="https://wa.me/254702943693"
                  target="_blank"
                  class="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                >
                  <Icon name="ph:whatsapp-logo" class="h-6 w-6" />
                </a>
                <a
                  href="https://wa.me/254702943693?text=I'd like to know more about FantasyWorld products"
                  target="_blank"
                  class="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  <Icon name="ph:phone" class="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="bg-white dark:bg-black rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Contact Us on WhatsApp
            </h2>

            <div class="space-y-6">
              <div class="text-center">
                <p class="text-gray-600 dark:text-gray-300 mb-6">
                  For the fastest response and personalized service, contact us directly on WhatsApp.
                </p>
                
                <a
                  href="https://wa.me/254702943693?text=Hi! I'd like to know more about FantasyWorld products"
                  target="_blank"
                  class="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-300 text-lg"
                >
                  <Icon name="ph:whatsapp-logo" class="w-6 h-6 mr-3" />
                  Chat on WhatsApp
                </a>
              </div>

              <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 class="font-medium text-gray-800 dark:text-white mb-2">Quick Contact Options:</h3>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• <a href="https://wa.me/254702943693?text=I'd like to place an order" target="_blank" class="text-green-600 hover:underline">Place an Order</a></li>
                  <li>• <a href="https://wa.me/254702943693?text=I have a question about products" target="_blank" class="text-green-600 hover:underline">Product Questions</a></li>
                  <li>• <a href="https://wa.me/254702943693?text=I need support with my order" target="_blank" class="text-green-600 hover:underline">Order Support</a></li>
                  <li>• <a href="https://wa.me/254702943693?text=I'd like to know about shipping" target="_blank" class="text-green-600 hover:underline">Shipping Info</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>
