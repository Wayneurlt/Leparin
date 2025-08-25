<template>
  <div class="text-center">
    <div 
      class="text-3xl md:text-4xl font-bold mb-2"
      :class="colorClass"
    >
      {{ value }}
    </div>
    <div class="text-gray-600 dark:text-gray-300">
      {{ label }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatsCard',
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    label: {
      type: String,
      required: true
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
    colorClass() {
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
