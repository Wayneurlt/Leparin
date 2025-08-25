<template>
  <div
    class="bg-white dark:bg-black rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
    @click="$emit('open-modal', product)"
  >
    <div class="relative pb-2/3 h-48">
      <img
        :src="product.image"
        :alt="product.name"
        class="absolute h-full w-full object-cover"
      />
    </div>
    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        {{ product.name }}
      </h3>
      <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
        {{ product.description }}
      </p>
      <div class="flex justify-between items-center">
        <span class="text-lg font-bold text-indigo-600 dark:text-indigo-400"
          >${{ product.price.toFixed(2) }}</span
        >
        <a
          :href="generateWhatsAppLink(product)"
          target="_blank"
          class="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300"
          @click.stop
        >
          <Icon name="ph:whatsapp-logo" class="w-4 h-4 mr-1" />
          Buy
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

defineProps({
  product: {
    type: Object,
    required: true,
  },
});

defineEmits(["open-modal"]);

const generateWhatsAppLink = (product) => {
  const phoneNumber = "254702943693"; // WhatsApp number for FantasyWorld
  const message = `I'm interested in ${product.name} ($${product.price.toFixed(
    2
  )})`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};
</script>
