<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
  >
    <!-- Header -->
    <header class="bg-white dark:bg-gray-800 shadow-sm">
      <div
        class="container mx-auto px-4 py-4 flex justify-between items-center"
      >
        <div class="flex items-center">
          <div
            class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mr-3"
          >
            S
          </div>
          <span class="text-xl font-bold text-gray-800 dark:text-white"
            >SEOToolHub</span
          >
        </div>

        <nav class="hidden md:flex space-x-8">
          <a href="#" class="text-blue-600 dark:text-blue-400 font-medium"
            >Home</a
          >
          <a
            href="#"
            class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >Reviews</a
          >
          <a
            href="#"
            class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >Comparisons</a
          >
          <a
            href="#"
            class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >Blog</a
          >
          <a
            href="#"
            class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >About</a
          >
        </nav>

        <div class="flex items-center space-x-4">
          <button
            @click="toggleDarkMode"
            class="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            <svg
              v-if="darkMode"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 01-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              />
            </svg>
          </button>

          <button class="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-600 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section
      class="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-10 md:mb-0">
            <h1
              class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"
            >
              Find the Perfect SEO Tools for Your Business
            </h1>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Unbiased reviews, detailed comparisons, and expert recommendations
              for all your SEO needs.
            </p>
            <div
              class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <button
                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Explore Reviews
              </button>
              <button
                class="border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Compare Tools
              </button>
            </div>
          </div>
          <div class="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="SEO Analytics Dashboard"
              class="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Indicators -->
    <section class="py-12 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Trusted by SEO Professionals Worldwide
          </h2>
          <p class="text-gray-600 dark:text-gray-300">
            Our rigorous testing methodology ensures unbiased, accurate reviews
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div
              class="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-blue-600 dark:text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800 dark:text-white mb-2">
              Unbiased Reviews
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              No sponsored content or paid placements
            </p>
          </div>

          <div class="text-center">
            <div
              class="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-green-600 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800 dark:text-white mb-2">
              Real Testing
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              We use every tool extensively before reviewing
            </p>
          </div>

          <div class="text-center">
            <div
              class="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-purple-600 dark:text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800 dark:text-white mb-2">
              Data-Driven
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Performance metrics and objective scoring
            </p>
          </div>

          <div class="text-center">
            <div
              class="bg-orange-100 dark:bg-orange-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-orange-600 dark:text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800 dark:text-white mb-2">
              Community Insights
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Feedback from thousands of SEO professionals
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Reviews -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Featured Tool Reviews
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            In-depth analysis of the most popular SEO tools in the market
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Keyword Research Tool"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <div class="flex items-center mb-4">
                <span
                  class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                  >Keyword Research</span
                >
                <div class="ml-auto flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <span class="ml-1 text-gray-600 dark:text-gray-300">4.8</span>
                </div>
              </div>
              <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">
                Semrush
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Comprehensive SEO suite with keyword research, rank tracking,
                and site audit features.
              </p>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-gray-800 dark:text-white"
                  >$119.95/mo</span
                >
                <button
                  class="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Read Review
                </button>
              </div>
            </div>
          </div>

          <div
            class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="SEO Analytics Tool"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <div class="flex items-center mb-4">
                <span
                  class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
                  >Rank Tracking</span
                >
                <div class="ml-auto flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <span class="ml-1 text-gray-600 dark:text-gray-300">4.6</span>
                </div>
              </div>
              <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">
                Ahrefs
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Powerful backlink analysis and competitive research tool with
                extensive database.
              </p>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-gray-800 dark:text-white"
                  >$99/mo</span
                >
                <button
                  class="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Read Review
                </button>
              </div>
            </div>
          </div>

          <div
            class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Content Optimization Tool"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <div class="flex items-center mb-4">
                <span
                  class="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300"
                  >Content SEO</span
                >
                <div class="ml-auto flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <span class="ml-1 text-gray-600 dark:text-gray-300">4.5</span>
                </div>
              </div>
              <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">
                SurferSEO
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Data-driven content optimization tool that helps you create
                SEO-friendly content.
              </p>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-gray-800 dark:text-white"
                  >$59/mo</span
                >
                <button
                  class="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Read Review
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <button
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            View All Reviews
          </button>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="py-16 bg-blue-600 dark:bg-blue-800">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">
          Stay Updated with SEO Trends
        </h2>
        <p class="text-blue-100 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and get the latest tool reviews,
          comparisons, and SEO strategies directly to your inbox.
        </p>

        <div class="max-w-md mx-auto flex">
          <input
            type="email"
            placeholder="Your email address"
            class="flex-grow px-4 py-3 rounded-l-lg focus:outline-none"
          />
          <button
            class="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-r-lg font-medium transition-colors"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 dark:bg-gray-900 text-gray-300 py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 class="text-white text-lg font-semibold mb-4">SEOToolHub</h3>
            <p class="mb-4">
              Unbiased reviews and comparisons of SEO tools to help you make
              informed decisions.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white">
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 class="text-white text-lg font-semibold mb-4">Categories</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white">Keyword Research</a></li>
              <li><a href="#" class="hover:text-white">Rank Tracking</a></li>
              <li>
                <a href="#" class="hover:text-white">Backlink Analysis</a>
              </li>
              <li>
                <a href="#" class="hover:text-white">Content Optimization</a>
              </li>
              <li><a href="#" class="hover:text-white">Technical SEO</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-white text-lg font-semibold mb-4">Company</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white">About Us</a></li>
              <li><a href="#" class="hover:text-white">Our Team</a></li>
              <li>
                <a href="#" class="hover:text-white">Review Methodology</a>
              </li>
              <li><a href="#" class="hover:text-white">Contact Us</a></li>
              <li><a href="#" class="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <p class="mb-2">1234 SEO Street, Suite 567</p>
            <p class="mb-2">San Francisco, CA 94103</p>
            <p class="mb-2">Email: info@seotoolhub.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>

        <div class="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>© 2023 SEOToolHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      darkMode: false,
    };
  },
  mounted() {
    // Check for saved theme preference or use OS preference
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
  },
};
</script>

<style>
/* Custom styles can be added here if needed */
</style>
