<template>
  <section class="py-16 bg-blue-600 dark:bg-blue-800">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold text-white mb-4">
        {{ title }}
      </h2>
      <p class="text-blue-100 mb-8 max-w-2xl mx-auto">
        {{ description }}
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink
          v-for="button in buttons"
          :key="button.text"
          :to="button.path"
          :class="[
            'px-8 py-3 rounded-lg font-medium transition-colors',
            button.primary 
              ? 'bg-white text-blue-600 hover:bg-gray-100' 
              : 'border border-white text-white hover:bg-white hover:text-blue-600'
          ]"
        >
          {{ button.text }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CTASection',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    buttons: {
      type: Array,
      required: true,
      validator: function(value) {
        return value.every(button => 
          button.text && 
          button.path && 
          typeof button.primary === 'boolean'
        );
      }
    }
  }
}
</script>
