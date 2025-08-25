<template>
  <div class="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-shadow">
    <!-- Service Image -->
    <img 
      :src="service.image" 
      :alt="service.name" 
      class="w-full h-48 object-cover"
    />
    
    <div class="p-6">
      <!-- Service Title -->
      <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        {{ service.name }}
      </h3>
      
      <!-- Service Description -->
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        {{ service.description }}
      </p>
      
      <!-- Service Features -->
      <ul class="space-y-3 mb-6">
        <li 
          v-for="feature in service.features" 
          :key="feature"
          class="flex items-center text-gray-600 dark:text-gray-300"
        >
          <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          {{ feature }}
        </li>
      </ul>
      
      <!-- Price and CTA -->
      <div class="flex justify-between items-center">
        <span class="text-2xl font-bold text-gray-800 dark:text-white">
          {{ service.price }}
        </span>
        <NuxtLink 
          :to="service.ctaLink || '/contact'" 
          class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          {{ service.ctaText || 'Get Started' }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    service: {
      type: Object,
      required: true,
      validator: function(value) {
        return value.name && value.description && value.price;
      }
    }
  }
}
</script>
