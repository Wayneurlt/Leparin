<template>
  <header class="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center">
        <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mr-3">
          R
        </div>
        <span class="text-xl font-bold text-gray-800 dark:text-white">RepuPro</span>
      </div>

      <!-- Navigation -->
      <nav class="hidden md:flex space-x-8">
        <NuxtLink 
          v-for="item in navigationItems" 
          :key="item.path"
          :to="item.path" 
          class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- Actions -->
      <div class="flex items-center space-x-4">
        <!-- Dark Mode Toggle -->
        <button 
          @click="toggleDarkMode" 
          class="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          :aria-label="darkMode ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <svg v-if="darkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 01-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu" 
          class="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <svg v-if="mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <nav class="container mx-auto px-4 py-4 space-y-2">
        <NuxtLink 
          v-for="item in navigationItems" 
          :key="item.path"
          :to="item.path" 
          @click="mobileMenuOpen = false"
          class="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      darkMode: false,
      mobileMenuOpen: false,
      navigationItems: [
        { path: '/', label: 'Home' },
        { path: '/services', label: 'Services' },
        { path: '/pricing', label: 'Pricing' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' }
      ]
    }
  },
  mounted() {
    // Initialize dark mode from localStorage
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      this.darkMode = true;
      document.documentElement.classList.add("dark");
    } else {
      this.darkMode = false;
      document.documentElement.classList.remove("dark");
    }
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      if (this.darkMode) {
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
      } else {
        localStorage.theme = "light";
        document.documentElement.classList.remove("dark");
      }
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    }
  }
}
</script>
