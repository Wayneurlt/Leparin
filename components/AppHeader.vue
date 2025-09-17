<template>
  <header class="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20 sticky top-0 z-50">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center">
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <div class="relative">
            <img 
              src="/assets/images/logo.png" 
              alt="Obscenda Logo" 
              class="w-auto h-20 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
      
        </NuxtLink>
      </div>

      <!-- Navigation -->
      <nav class="hidden md:flex space-x-1">
        <NuxtLink 
          v-for="item in navigationItems" 
          :key="item.path"
          :to="item.path" 
          class="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-all duration-300 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group"
        >
          {{ item.label }}
          <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </NuxtLink>
      </nav>

      <!-- Actions -->
      <div class="flex items-center space-x-3">
        <!-- CTA Button -->
        <NuxtLink 
          to="/contact" 
          class="hidden sm:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Get Started
        </NuxtLink>
        
        <!-- Dark Mode Toggle -->
        <button 
          @click="toggleDarkMode" 
          class="p-2.5 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200/70 dark:hover:bg-gray-700/70 transition-all duration-300 border border-gray-200/20 dark:border-gray-700/20"
          :aria-label="darkMode ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <svg v-if="darkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 01-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu" 
          class="md:hidden p-2.5 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200/70 dark:hover:bg-gray-700/70 transition-all duration-300 border border-gray-200/20 dark:border-gray-700/20"
          :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <svg v-if="mobileMenuOpen" class="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <svg v-else class="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200/20 dark:border-gray-700/20 shadow-lg">
      <nav class="container mx-auto px-6 py-6 space-y-1">
        <NuxtLink 
          v-for="item in navigationItems" 
          :key="item.path"
          :to="item.path" 
          @click="mobileMenuOpen = false"
          class="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg font-medium transition-all duration-300"
        >
          {{ item.label }}
        </NuxtLink>
        <div class="pt-4 border-t border-gray-200/20 dark:border-gray-700/20">
          <NuxtLink 
            to="/contact" 
            @click="mobileMenuOpen = false"
            class="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
          >
            Get Started
          </NuxtLink>
        </div>
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
