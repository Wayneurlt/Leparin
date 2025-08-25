<template>
  <section class="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
        {{ title }}
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
        {{ description }}
      </p>
      
      <!-- CTA Buttons -->
      <div v-if="ctaButtons && ctaButtons.length > 0" class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink
          v-for="button in ctaButtons"
          :key="button.text"
          :to="button.path"
          :class="[
            'px-8 py-3 rounded-lg font-medium transition-colors',
            button.primary 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white'
          ]"
        >
          {{ button.text }}
        </NuxtLink>
      </div>

      <!-- Additional Content Slot -->
      <slot name="additional-content"></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    ctaButtons: {
      type: Array,
      default: () => []
    }
  }
}
</script>
