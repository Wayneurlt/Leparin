<template>
  <nav
    class="bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm transition-colors duration-300 sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20 items-center">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center">
            <!-- <img
              src="/assets/images/logo.png"
              alt="Fantasy World Logo"
              class="h-12 w-auto transition-transform hover:scale-105"
            /> -->
            <span
              class="ml-2 text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent dark:from-pink-400 dark:to-purple-400"
            >
              FantasyWorld
            </span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="link in links"
            :key="link.name"
            :to="link.path"
            class="relative group text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors font-medium text-lg"
          >
            {{ link.name }}
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-600 dark:bg-pink-400 transition-all duration-300 group-hover:w-full"
            ></span>
          </NuxtLink>

          <!-- Dark mode toggle -->
          <button
            @click="toggleDarkMode"
            class="p-2 rounded-full focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            <Icon
              :icon="darkMode ? 'ph:sun-duotone' : 'ph:moon-duotone'"
              class="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
            />
          </button>

          <!-- Shopping cart icon -->
          <button class="p-2 relative">
            <Icon
              icon="ph:shopping-cart"
              class="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
            />
            <span
              class="absolute -top-1 -right-1 bg-pink-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
            >
              0
            </span>
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center space-x-4">
          <button class="p-2 relative">
            <Icon
              icon="ph:shopping-cart"
              class="w-6 h-6 text-gray-700 dark:text-gray-300"
            />
            <span
              class="absolute -top-1 -right-1 bg-pink-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
            >
              0
            </span>
          </button>

          <button
            @click="isOpen = !isOpen"
            class="p-2 rounded-md focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <Icon
              :icon="isOpen ? 'ph:x' : 'ph:list'"
              class="w-6 h-6 text-gray-700 dark:text-gray-300"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-show="isOpen"
      class="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg border-t border-gray-200 dark:border-gray-800"
    >
      <div class="px-2 pt-2 pb-4 space-y-2 sm:px-3">
        <NuxtLink
          v-for="link in links"
          :key="link.name"
          :to="link.path"
          class="block px-3 py-3 rounded-md text-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-800 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
          @click="isOpen = false"
        >
          {{ link.name }}
        </NuxtLink>

        <button
          @click="toggleDarkMode"
          class="w-full text-left px-3 py-3 rounded-md text-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-800 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
        >
          <div class="flex items-center">
            <Icon
              :icon="darkMode ? 'ph:sun-duotone' : 'ph:moon-duotone'"
              class="w-6 h-6 mr-2"
            />
            {{ darkMode ? "Light Mode" : "Dark Mode" }}
          </div>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const links = [
  { name: "Products", path: "/products" },
  { name: "For Women", path: "/women" },
  { name: "For Men", path: "/men" },
  { name: "Contact", path: "/contact" },
];

const isOpen = ref(false);
const darkMode = ref(false);

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  if (darkMode.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("color-theme", "light");
  }
};

onMounted(() => {
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    darkMode.value = true;
    document.documentElement.classList.add("dark");
  } else {
    darkMode.value = false;
    document.documentElement.classList.remove("dark");
  }
});
</script>
