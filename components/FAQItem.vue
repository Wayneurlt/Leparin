<template>
  <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
    <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-3">
      {{ question }}
    </h3>
    <p class="text-gray-600 dark:text-gray-300">
      {{ answer }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'FAQItem',
  props: {
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    }
  }
}
</script>
