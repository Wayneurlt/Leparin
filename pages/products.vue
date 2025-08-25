<template>
  <Navbar />
  <div
    class="py-12 bg-gradient-to-b from-gray-50 to-pink-50 dark:from-gray-900 dark:to-purple-900/20 min-h-screen transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="text-center mb-16">
        <h1
          class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"
        >
          Explore Our
          <span class="text-pink-600 dark:text-pink-400">Collection</span>
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Premium pleasure products designed for unforgettable experiences
        </p>
      </div>

      <!-- Product Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          class="hover:scale-[1.02] transition-transform duration-300"
          @open-modal="openModal(product)"
        />
      </div>

      <!-- Product Modal -->
      <div v-if="selectedProduct" class="fixed inset-0 z-50 overflow-y-auto">
        <div
          class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <!-- Background overlay -->
          <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div
              class="absolute inset-0 bg-black/70 backdrop-blur-sm"
              @click="closeModal"
            ></div>
          </div>

          <!-- Modal content -->
          <div
            class="inline-block align-bottom bg-white dark:bg-gray-800 rounded-xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl w-full border border-gray-200 dark:border-gray-700"
          >
            <div class="bg-white dark:bg-gray-800 px-6 pt-6 pb-8 sm:p-8">
              <div class="flex justify-between items-start">
                <div>
                  <h3
                    class="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                  >
                    {{ selectedProduct.name }}
                  </h3>
                  <div class="flex items-center space-x-2 mb-6">
                    <div class="flex text-amber-400">
                      <Icon
                        v-for="i in 5"
                        :key="i"
                        icon="ph:star-fill"
                        class="w-5 h-5"
                      />
                    </div>
                    <span class="text-gray-500 dark:text-gray-400 text-sm"
                      >(42 reviews)</span
                    >
                  </div>
                </div>
                <button
                  @click="closeModal"
                  class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                >
                  <Icon name="ph:x" class="w-6 h-6" />
                </button>
              </div>

              <div class="flex flex-col md:flex-row gap-8">
                <div class="md:w-1/2">
                  <img
                    :src="selectedProduct.image"
                    :alt="selectedProduct.name"
                    class="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                  <div class="grid grid-cols-4 gap-2 mt-4">
                    <div
                      v-for="(img, index) in selectedProduct.gallery"
                      :key="index"
                      class="cursor-pointer border-2 border-transparent hover:border-pink-500 rounded-md overflow-hidden"
                      @click="selectedProduct.image = img"
                    >
                      <img :src="img" class="h-16 w-full object-cover" />
                    </div>
                  </div>
                </div>

                <div class="md:w-1/2">
                  <div class="mb-6">
                    <p class="text-gray-700 dark:text-gray-300 mb-6">
                      {{ selectedProduct.description }}
                    </p>

                    <div class="space-y-3 mb-6">
                      <div class="flex items-center">
                        <Icon
                          name="ph:check-circle"
                          class="text-pink-500 mr-2 w-5 h-5"
                        />
                        <span class="text-gray-700 dark:text-gray-300">{{
                          selectedProduct.features[0]
                        }}</span>
                      </div>
                      <div class="flex items-center">
                        <Icon
                          name="ph:check-circle"
                          class="text-pink-500 mr-2 w-5 h-5"
                        />
                        <span class="text-gray-700 dark:text-gray-300">{{
                          selectedProduct.features[1]
                        }}</span>
                      </div>
                      <div class="flex items-center">
                        <Icon
                          name="ph:check-circle"
                          class="text-pink-500 mr-2 w-5 h-5"
                        />
                        <span class="text-gray-700 dark:text-gray-300">{{
                          selectedProduct.features[2]
                        }}</span>
                      </div>
                    </div>

                    <div class="flex items-center justify-between mb-6">
                      <div>
                        <p class="text-sm text-gray-500 dark:text-gray-400">
                          Price
                        </p>
                        <p
                          class="text-3xl font-bold text-pink-600 dark:text-pink-400"
                        >
                          ${{ selectedProduct.price.toFixed(2) }}
                        </p>
                      </div>
                      <div class="text-right">
                        <p class="text-sm text-gray-500 dark:text-gray-400">
                          In Stock
                        </p>
                        <p
                          class="text-lg font-medium text-green-600 dark:text-green-400"
                        >
                          <Icon name="ph:check" class="inline mr-1" /> Available
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    :href="whatsappLink"
                    target="_blank"
                    class="w-full flex items-center justify-center bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-pink-500/30"
                  >
                    <Icon name="ph:whatsapp-logo" class="w-6 h-6 mr-2" />
                    Order on WhatsApp
                  </a>

                  <div
                    class="mt-4 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400"
                  >
                    <Icon name="ph:lock" class="w-4 h-4 mr-1" />
                    Discreet packaging & billing
                  </div>
                </div>
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

const products = [
  {
    id: 1,
    name: "Sensual Massage Wand",
    description:
      "Premium waterproof wand with 10 vibration patterns and whisper-quiet motor. Ergonomic design fits perfectly in your hand for targeted pleasure. USB rechargeable with 3 hours of continuous use.",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1616486334851-f8b8742f1b1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616486334851-f8b8742f1b1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    ],
    features: [
      "10 vibration patterns",
      "Waterproof & body-safe",
      "USB rechargeable",
    ],
  },
  {
    id: 2,
    name: "Couples' Bondage Set",
    description:
      "Luxury satin restraints set with adjustable cuffs and blindfold. Soft yet secure materials for comfortable play. Includes 4 pieces: wrist cuffs, ankle cuffs, blindfold, and feather tickler.",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1616486334851-f8b8742f1b1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    ],
    features: [
      "Luxury satin material",
      "Adjustable for all sizes",
      "Easy-release safety buckles",
    ],
  },
  {
    id: 3,
    name: "Arousal Oil Set",
    description:
      "Triple-action warming, cooling, and tingling massage oil set. 100% natural ingredients with delicious flavors. Includes 3 x 50ml bottles in different sensations for varied play.",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1616486334851-f8b8742f1b1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    ],
    features: [
      "3 different sensations",
      "Edible & body-safe",
      "Long-lasting formula",
    ],
  },
  {
    id: 4,
    name: "Remote Control Vibrator",
    description:
      "App-controlled vibrator with long-distance connectivity. 20 vibration patterns with customizable intensity. Waterproof design for bath or shower play. Includes discreet storage pouch.",
    price: 119.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1616486334851-f8b8742f1b1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    ],
    features: [
      "App-controlled via Bluetooth",
      "20 vibration patterns",
      "Waterproof & travel-friendly",
    ],
  },
  {
    id: 5,
    name: "Sensation Play Kit",
    description:
      "Complete sensory play set including flogger, feather tickler, and silk blindfold. Premium materials designed for sensual exploration. Perfect for beginners and experienced players alike.",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1616486334851-f8b8742f1b1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    ],
    features: [
      "3-piece sensory set",
      "Premium soft materials",
      "Easy to clean and store",
    ],
  },
  {
    id: 6,
    name: "Luxury Silk Robe",
    description:
      "Charmeuse silk robe with lace detailing for sensual moments. Available in multiple colors with matching lingerie sets. Machine washable while maintaining its luxurious feel.",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1616486334851-f8b8742f1b1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    ],
    features: [
      "100% charmeuse silk",
      "Lace detailing",
      "Matching sets available",
    ],
  },
];

const selectedProduct = ref(null);
const whatsappLink = ref("");

const openModal = (product) => {
  selectedProduct.value = product;
  whatsappLink.value = generateWhatsAppLink(product);
};

const closeModal = () => {
  selectedProduct.value = null;
};

const generateWhatsAppLink = (product) => {
  const phoneNumber = "254702943693"; // WhatsApp number for FantasyWorld
  const message = `I'd like to order the ${
    product.name
  } ($${product.price.toFixed(2)}) from FantasyWorld`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};
</script>
