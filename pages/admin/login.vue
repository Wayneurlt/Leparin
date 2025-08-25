<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-red-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <div class="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-white/10">
          <Icon name="ph:shield-check" class="h-8 w-8 text-white" />
        </div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-white">
          Admin Dashboard
        </h2>
        <p class="mt-2 text-center text-sm text-pink-200">
          Sign in to manage FantasyWorld products
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email" class="sr-only">Email address</label>
            <input
              id="email"
              v-model="email"
              name="email"
              type="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              v-model="password"
              name="password"
              type="password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="loading"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="loading" class="absolute left-0 inset-y-0 flex items-center pl-3">
              <Icon name="ph:spinner" class="h-5 w-5 animate-spin" />
            </span>
            {{ loading ? 'Signing in...' : 'Sign in' }}
          </button>
        </div>

        <div v-if="error" class="text-red-300 text-center text-sm">
          {{ error }}
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const email = ref('');
const password = ref('');
const loading = ref(false);
const error = ref('');

const handleLogin = async () => {
  loading.value = true;
  error.value = '';
  
  try {
    // Simple admin authentication (in production, use proper auth)
    if (email.value === 'admin@fantasyworld.com' && password.value === 'admin123') {
      // Set admin session
      localStorage.setItem('adminAuthenticated', 'true');
      localStorage.setItem('adminEmail', email.value);
      
      // Redirect to admin dashboard
      await navigateTo('/admin/dashboard');
    } else {
      error.value = 'Invalid email or password';
    }
  } catch (err) {
    error.value = 'Login failed. Please try again.';
  } finally {
    loading.value = false;
  }
};

// Redirect if already authenticated
onMounted(() => {
  if (localStorage.getItem('adminAuthenticated') === 'true') {
    navigateTo('/admin/dashboard');
  }
});
</script>
