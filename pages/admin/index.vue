<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <Icon name="ph:spinner" class="h-8 w-8 animate-spin mx-auto text-pink-600" />
      <p class="mt-2 text-gray-600">Redirecting to admin...</p>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

// Redirect to admin login
onMounted(() => {
  navigateTo('/admin/login');
});
</script>
