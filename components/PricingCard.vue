<template>
  <div 
    class="rounded-xl shadow-lg p-8 relative"
    :class="[
      plan.featured 
        ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white' 
        : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-600'
    ]"
  >
    <!-- Featured Badge -->
    <div v-if="plan.featured" class="absolute -top-4 left-1/2 transform -translate-x-1/2">
      <span class="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-medium">
        Most Popular
      </span>
    </div>

    <!-- Plan Header -->
    <div class="text-center mb-8">
      <h3 class="text-2xl font-bold mb-4">{{ plan.name }}</h3>
      <div class="mb-4">
        <span class="text-4xl font-bold">{{ plan.price }}</span>
        <span :class="plan.featured ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'">
          {{ plan.period }}
        </span>
      </div>
      <p :class="plan.featured ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'">
        {{ plan.description }}
      </p>
    </div>

    <!-- Features List -->
    <ul class="space-y-4 mb-8">
      <li 
        v-for="feature in plan.features" 
        :key="feature"
        class="flex items-center"
        :class="plan.featured ? 'text-white' : 'text-gray-600 dark:text-gray-300'"
      >
        <svg 
          class="w-5 h-5 mr-3" 
          :class="plan.featured ? 'text-yellow-400' : 'text-green-500'"
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        {{ feature }}
      </li>
    </ul>

    <!-- CTA Button -->
    <NuxtLink
      :to="plan.ctaLink || '/contact'"
      :class="[
        'w-full font-medium py-3 px-6 rounded-lg transition-colors text-center block',
        plan.featured 
          ? 'bg-white text-blue-600 hover:bg-gray-100' 
          : 'bg-blue-600 hover:bg-blue-700 text-white'
      ]"
    >
      {{ plan.ctaText || 'Get Started' }}
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'PricingCard',
  props: {
    plan: {
      type: Object,
      required: true,
      validator: function(value) {
        return value.name && value.price && value.features;
      }
    }
  }
}
</script>
