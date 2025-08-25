<template>
  <div>
    <!-- Hero Section -->
    <HeroSection 
      title="Transparent Pricing"
      description="Choose the perfect plan for your business. All plans include our 30-day money-back guarantee."
    />

    <!-- Pricing Plans -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Basic Plan -->
          <div class="bg-white dark:bg-gray-700 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 p-8">
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Basic</h3>
              <div class="mb-4">
                <span class="text-4xl font-bold text-gray-800 dark:text-white">$299</span>
                <span class="text-gray-600 dark:text-gray-300">/one-time</span>
              </div>
              <p class="text-gray-600 dark:text-gray-300">Perfect for small businesses getting started</p>
            </div>

            <ul class="space-y-4 mb-8">
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                10 positive reviews
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Google, Yelp, Facebook
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Professional writing
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                30-day delivery
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Email support
              </li>
            </ul>

            <NuxtLink
              to="/contact"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center block"
            >
              Get Started
            </NuxtLink>
          </div>

          <!-- Professional Plan -->
          <div class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg p-8 relative">
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
            </div>
            
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-white mb-4">Professional</h3>
              <div class="mb-4">
                <span class="text-4xl font-bold text-white">$599</span>
                <span class="text-blue-100">/one-time</span>
              </div>
              <p class="text-blue-100">Comprehensive reputation management</p>
            </div>

            <ul class="space-y-4 mb-8">
              <li class="flex items-center text-white">
                <svg class="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Everything in Basic
              </li>
              <li class="flex items-center text-white">
                <svg class="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Reputation analysis
              </li>
              <li class="flex items-center text-white">
                <svg class="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Negative review removal
              </li>
              <li class="flex items-center text-white">
                <svg class="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Monthly monitoring
              </li>
              <li class="flex items-center text-white">
                <svg class="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Priority support
              </li>
            </ul>

            <NuxtLink
              to="/contact"
              class="w-full bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors text-center block"
            >
              Get Started
            </NuxtLink>
          </div>

          <!-- Enterprise Plan -->
          <div class="bg-white dark:bg-gray-700 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 p-8">
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Enterprise</h3>
              <div class="mb-4">
                <span class="text-4xl font-bold text-gray-800 dark:text-white">$999</span>
                <span class="text-gray-600 dark:text-gray-300">/one-time</span>
              </div>
              <p class="text-gray-600 dark:text-gray-300">Complete reputation transformation</p>
            </div>

            <ul class="space-y-4 mb-8">
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Everything in Professional
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Local SEO optimization
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Directory listings
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Crisis management
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Dedicated account manager
              </li>
            </ul>

            <NuxtLink
              to="/contact"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center block"
            >
              Get Started
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Services -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Additional Services
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Add these services to any plan for enhanced results
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Review Monitoring</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">24/7 monitoring of all your business reviews</p>
            <div class="text-2xl font-bold text-gray-800 dark:text-white mb-4">$149/month</div>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Instant alerts
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Response management
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Analytics dashboard
              </li>
            </ul>
            <NuxtLink to="/contact" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">Learn More</NuxtLink>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Directory Reviews</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">Get listed on 50+ business directories</p>
            <div class="text-2xl font-bold text-gray-800 dark:text-white mb-4">$199/one-time</div>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                50+ directory listings
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Professional profiles
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Ongoing maintenance
              </li>
            </ul>
            <NuxtLink to="/contact" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">Learn More</NuxtLink>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Local SEO</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">Optimize your local search presence</p>
            <div class="text-2xl font-bold text-gray-800 dark:text-white mb-4">$399/one-time</div>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Google My Business setup
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Local citations
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-300">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Review management
              </li>
            </ul>
            <NuxtLink to="/contact" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">Learn More</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Pricing FAQ
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Common questions about our pricing and services
          </p>
        </div>

        <div class="max-w-3xl mx-auto space-y-6">
          <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Do you offer payment plans?
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Yes, we offer flexible payment plans for all our services. Contact us to discuss payment options that work for your business.
            </p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              What's included in the money-back guarantee?
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              If you're not satisfied with our services within 30 days, we'll provide a full refund. No questions asked.
            </p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Can I upgrade my plan later?
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Absolutely! You can upgrade to a higher-tier plan at any time. We'll prorate the difference for the remaining service period.
            </p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Do you offer custom pricing for large businesses?
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Yes, we offer custom pricing and packages for enterprise clients with multiple locations or specific requirements.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-blue-600 dark:bg-blue-800">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p class="text-blue-100 mb-8 max-w-2xl mx-auto">
          Choose the plan that best fits your needs, or contact us for a custom solution. 
          Our team is ready to help you improve your online reputation.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Contact Us Today
          </NuxtLink>
          <NuxtLink
            to="/services"
            class="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors"
          >
            View All Services
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script>
export default {
  name: "PricingPage"
};
</script>
