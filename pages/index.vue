<template>
  <div>
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
              Protect & Enhance Your Business Reputation
            </h1>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Professional online reputation management services. Get positive reviews, 
              improve your online presence, and build trust with customers. 12+ years of experience.
            </p>
            <div
              class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <NuxtLink
                to="/contact"
                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
              >
                Get Started Today
              </NuxtLink>
              <NuxtLink
                to="/services"
                class="border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition-colors text-center"
              >
                View Services
              </NuxtLink>
            </div>
          </div>
          <div class="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Online Reputation Management"
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
            Trusted by 500+ Businesses Nationwide
          </h2>
          <p class="text-gray-600 dark:text-gray-300">
            Our proven track record speaks for itself - we've helped businesses improve their online reputation for over 12 years
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
              Secure & Confidential
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Your business information is protected with bank-level security
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
              Fast Results
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              See improvements in your online reputation within 30 days
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800 dark:text-white mb-2">
              24/7 Support
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Round-the-clock customer support and monitoring
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800 dark:text-white mb-2">
              Money-Back Guarantee
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              30-day satisfaction guarantee on all services
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Our Reputation Management Services
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Comprehensive solutions to protect and enhance your business reputation
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Online Reviews"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <div class="flex items-center mb-4">
                <span
                  class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                  >Reviews</span
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
                  <span class="ml-1 text-gray-600 dark:text-gray-300">4.9</span>
                </div>
              </div>
              <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">
                Positive Reviews
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Generate authentic positive reviews across Google, Yelp, Facebook, and other major platforms.
              </p>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-gray-800 dark:text-white"
                  >From $299</span
                >
                <NuxtLink
                  to="/services"
                  class="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Learn More
                </NuxtLink>
              </div>
            </div>
          </div>

          <div
            class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Reputation Management"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <div class="flex items-center mb-4">
                <span
                  class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
                  >Management</span
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
                Reputation Repair
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Remove negative reviews and repair damaged online reputation with our proven strategies.
              </p>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-gray-800 dark:text-white"
                  >From $599</span
                >
                <NuxtLink
                  to="/services"
                  class="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Learn More
                </NuxtLink>
              </div>
            </div>
          </div>

          <div
            class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Local SEO"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <div class="flex items-center mb-4">
                <span
                  class="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300"
                  >Local SEO</span
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
                  <span class="ml-1 text-gray-600 dark:text-gray-300">4.7</span>
                </div>
              </div>
              <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">
                Local SEO Services
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Optimize your local search presence with Google My Business and local directory management.
              </p>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-gray-800 dark:text-white"
                  >From $399</span
                >
                <NuxtLink
                  to="/services"
                  class="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Learn More
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <NuxtLink
            to="/services"
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            View All Services
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            How It Works
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Simple 3-step process to improve your online reputation
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="bg-blue-100 dark:bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
            </div>
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Submit Your Details
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Tell us about your business and the reputation challenges you're facing. We'll create a customized plan.
            </p>
          </div>

          <div class="text-center">
            <div class="bg-blue-100 dark:bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
            </div>
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Choose Your Package
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Select from our range of reputation management packages designed for businesses of all sizes.
            </p>
          </div>

          <div class="text-center">
            <div class="bg-blue-100 dark:bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-blue-600 dark:text-blue-400">3</span>
            </div>
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">
              We Deliver Results
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Our team gets to work immediately. You'll see improvements in your online reputation within 30 days.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="py-16 bg-blue-600 dark:bg-blue-800">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">
          Stay Updated with Reputation Management Tips
        </h2>
        <p class="text-blue-100 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and get the latest reputation management strategies, 
          industry insights, and success stories directly to your inbox.
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
    <AppFooter />
  </div>
</template>

<script>
export default {
  name: "HomePage"
};
</script>

<style>
/* Custom styles can be added here if needed */
</style>
