<template>
  <div>
    <!-- Hero Section -->
    <HeroSection 
      title="Our Services"
      description="Comprehensive reputation management solutions designed to protect and enhance your business's online presence"
    />

    <!-- Services Grid -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Online Reviews Service -->
          <div class="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-600">
            <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Online Reviews" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Online Reviews</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                Generate authentic positive reviews across major platforms including Google, Yelp, Facebook, and more.
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-center text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  Professional review writing
                </li>
                <li class="flex items-center text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  Multiple platform coverage
                </li>
                <li class="flex items-center text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  30-day delivery guarantee
                </li>
              </ul>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-gray-800 dark:text-white">From $299</span>
                <NuxtLink to="/contact" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Get Started
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Reputation Management Service -->
          <div class="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-600">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Reputation Management" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Reputation Management</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                Comprehensive reputation repair and monitoring service with monthly reports and crisis management.
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-center text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  Reputation analysis
                </li>
                <li class="flex items-center text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  Negative review removal
                </li>
                <li class="flex items-center text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  Crisis management
                </li>
              </ul>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-gray-800 dark:text-white">From $599</span>
                <NuxtLink to="/contact" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Get Started
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Local SEO Service -->
          <div class="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-600">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Local SEO" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Local SEO</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                Optimize your local search presence with Google My Business and local directory management.
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-center text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  Google My Business setup
                </li>
                <li class="flex items-center text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  Local citations
                </li>
                <li class="flex items-center text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  Review management
                </li>
              </ul>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-gray-800 dark:text-white">From $399</span>
                <NuxtLink to="/contact" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Get Started
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Directory Reviews Service -->
          <div class="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-600">
            <img src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Directory Reviews" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Directory Reviews</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                Get listed and reviewed on 50+ major business directories and review platforms.
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-center text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  50+ directory listings
                </li>
                <li class="flex items-center text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  Professional profiles
                </li>
                <li class="flex items-center text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  Ongoing maintenance
                </li>
              </ul>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-gray-800 dark:text-white">From $199</span>
                <NuxtLink to="/contact" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Get Started
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Review Monitoring Service -->
          <div class="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-600">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Review Monitoring" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Review Monitoring</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                24/7 monitoring of all your business reviews with instant alerts and response management.
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-center text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  24/7 monitoring
                </li>
                <li class="flex items-center text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  Instant alerts
                </li>
                <li class="flex items-center text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  Analytics dashboard
                </li>
              </ul>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-gray-800 dark:text-white">From $149</span>
                <NuxtLink to="/contact" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Get Started
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Custom Package -->
          <div class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg overflow-hidden border border-blue-400">
            <div class="p-6 text-white">
              <h3 class="text-2xl font-bold mb-4">Custom Package</h3>
              <p class="mb-6 opacity-90">
                Need a tailored solution? We'll create a custom package that perfectly fits your business needs.
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-center opacity-90">
                  <svg class="w-5 h-5 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  Personalized strategy
                </li>
                <li class="flex items-center opacity-90">
                  <svg class="w-5 h-5 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  Dedicated account manager
                </li>
                <li class="flex items-center opacity-90">
                  <svg class="w-5 h-5 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  Priority support
                </li>
              </ul>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold">Custom Quote</span>
                <NuxtLink to="/contact" class="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-medium transition-colors">
                  Contact Us
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CTASection 
      title="Ready to Get Started?"
      description="Choose the service that best fits your needs, or contact us for a custom solution. Our team is ready to help you improve your online reputation."
      :buttons="[
        { text: 'Contact Us Today', path: '/contact', primary: true }
      ]"
    />

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script>
export default {
  name: "ServicesPage"
};
</script>
