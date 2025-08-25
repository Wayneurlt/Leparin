<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-shadow">
    <!-- Star Rating -->
    <div class="flex items-center mb-6">
      <div class="flex text-yellow-400">
        <svg 
          v-for="i in 5" 
          :key="i" 
          class="w-5 h-5" 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
    </div>

    <!-- Testimonial Text -->
    <p class="text-gray-600 dark:text-gray-300 mb-6 italic">
      "{{ testimonial }}"
    </p>

    <!-- Author Info -->
    <div class="flex items-center">
      <div 
        class="w-12 h-12 rounded-full flex items-center justify-center mr-4"
        :class="authorColorClass"
      >
        <span class="font-bold text-lg" :class="authorTextColorClass">
          {{ author.initials }}
        </span>
      </div>
      <div>
        <div class="font-semibold text-gray-800 dark:text-white">
          {{ author.name }}
        </div>
        <div class="text-gray-600 dark:text-gray-300 text-sm">
          {{ author.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialCard',
  props: {
    testimonial: {
      type: String,
      required: true
    },
    author: {
      type: Object,
      required: true,
      validator: function(value) {
        return value.name && value.title && value.initials;
      }
    },
    color: {
      type: String,
      default: 'blue',
      validator: function(value) {
        return ['blue', 'green', 'purple', 'orange', 'red', 'teal'].includes(value);
      }
    }
  },
  computed: {
    authorColorClass() {
      const colorMap = {
        blue: 'bg-blue-100 dark:bg-blue-900',
        green: 'bg-green-100 dark:bg-green-900',
        purple: 'bg-purple-100 dark:bg-purple-900',
        orange: 'bg-orange-100 dark:bg-orange-900',
        red: 'bg-red-100 dark:bg-red-900',
        teal: 'bg-teal-100 dark:bg-teal-900'
      };
      return colorMap[this.color] || colorMap.blue;
    },
    authorTextColorClass() {
      const colorMap = {
        blue: 'text-blue-600 dark:text-blue-400',
        green: 'text-green-600 dark:text-green-400',
        purple: 'text-purple-600 dark:text-purple-400',
        orange: 'text-orange-600 dark:text-orange-400',
        red: 'text-red-600 dark:text-red-400',
        teal: 'text-teal-600 dark:text-teal-400'
      };
      return colorMap[this.color] || colorMap.blue;
    }
  }
}
</script>
