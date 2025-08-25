<template>
  <div>
    <AppHeader />
    
    <!-- Hero Section -->
    <HeroSection 
      title="How It Works"
      description="Our simple 3-step process makes it easy to improve your online reputation. See how we can help transform your business's digital presence."
    />

    <!-- Process Steps -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <!-- Step 1 -->
            <div class="text-center">
              <div class="relative mb-8">
                <div class="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span class="text-white text-3xl font-bold">1</span>
                </div>
                <div class="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-300 dark:bg-gray-600 transform translate-x-4"></div>
              </div>
              
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Submit Your Details
              </h3>
              
              <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 mb-6">
                <div class="space-y-4 text-left">
                  <div class="flex items-center">
                    <div class="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
                      <svg class="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <span class="text-gray-700 dark:text-gray-300">Business information</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
                      <svg class="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <span class="text-gray-700 dark:text-gray-300">Current reputation status</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
                      <svg class="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <span class="text-gray-700 dark:text-gray-300">Goals and objectives</span>
                  </div>
                </div>
              </div>
              
              <p class="text-gray-600 dark:text-gray-300">
                Tell us about your business, current online presence, and what you want to achieve. Our team will analyze your situation and create a customized strategy.
              </p>
            </div>

            <!-- Step 2 -->
            <div class="text-center">
              <div class="relative mb-8">
                <div class="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span class="text-white text-3xl font-bold">2</span>
                </div>
                <div class="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-300 dark:bg-gray-600 transform translate-x-4"></div>
              </div>
              
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Choose Your Package
              </h3>
              
              <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 mb-6">
                <div class="space-y-4 text-left">
                  <div class="flex items-center">
                    <div class="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-3">
                      <svg class="w-4 h-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <span class="text-gray-700 dark:text-gray-300">Review generation</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-3">
                      <svg class="w-4 h-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <span class="text-gray-700 dark:text-gray-300">Reputation management</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-3">
                      <svg class="w-4 h-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <span class="text-gray-700 dark:text-gray-300">Local SEO services</span>
                  </div>
                </div>
              </div>
              
              <p class="text-gray-600 dark:text-gray-300">
                Select from our range of services based on your needs and budget. We offer flexible packages that can be customized to your specific requirements.
              </p>
            </div>

            <!-- Step 3 -->
            <div class="text-center">
              <div class="relative mb-8">
                <div class="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span class="text-white text-3xl font-bold">3</span>
                </div>
              </div>
              
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                We Deliver Results
              </h3>
              
              <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 mb-6">
                <div class="space-y-4 text-left">
                  <div class="flex items-center">
                    <div class="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
                      <svg class="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <span class="text-gray-700 dark:text-gray-300">30-day delivery guarantee</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
                      <svg class="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <span class="text-gray-700 dark:text-gray-300">Regular progress updates</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
                      <svg class="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <span class="text-gray-700 dark:text-gray-300">Ongoing support</span>
                  </div>
                </div>
              </div>
              
              <p class="text-gray-600 dark:text-gray-300">
                Our expert team gets to work immediately. You'll see results within 30 days, with regular updates and ongoing support to maintain your improved reputation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            What Happens After You Sign Up?
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            A detailed timeline of our reputation management process
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <!-- Day 1-3 -->
            <div class="flex items-start">
              <div class="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-6">
                <span class="text-white font-bold">1-3</span>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Initial Assessment & Strategy</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  Our team conducts a comprehensive analysis of your current online reputation, identifies key issues, and develops a customized strategy for improvement.
                </p>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Review current online presence across all platforms</li>
                  <li>• Identify negative reviews and reputation issues</li>
                  <li>• Create personalized action plan</li>
                  <li>• Set up monitoring and tracking systems</li>
                </ul>
              </div>
            </div>

            <!-- Day 4-14 -->
            <div class="flex items-start">
              <div class="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mr-6">
                <span class="text-white font-bold">4-14</span>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Active Reputation Management</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  We begin implementing our strategy, addressing negative reviews, generating positive content, and improving your overall online presence.
                </p>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Respond to and address negative reviews</li>
                  <li>• Generate authentic positive reviews</li>
                  <li>• Optimize business listings and profiles</li>
                  <li>• Create and publish positive content</li>
                </ul>
              </div>
            </div>

            <!-- Day 15-30 -->
            <div class="flex items-start">
              <div class="flex-shrink-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-6">
                <span class="text-white font-bold">15-30</span>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Results & Optimization</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  Monitor results, make adjustments, and continue optimization to ensure maximum impact and long-term success.
                </p>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Track improvement metrics and analytics</li>
                  <li>• Optimize strategies based on results</li>
                  <li>• Continue reputation building efforts</li>
                  <li>• Provide detailed progress report</li>
                </ul>
              </div>
            </div>

            <!-- Ongoing -->
            <div class="flex items-start">
              <div class="flex-shrink-0 w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mr-6">
                <span class="text-white font-bold">∞</span>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Ongoing Support & Maintenance</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  Continuous monitoring and maintenance to protect and enhance your reputation long-term.
                </p>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• 24/7 reputation monitoring</li>
                  <li>• Regular maintenance and updates</li>
                  <li>• Ongoing review generation</li>
                  <li>• Crisis management support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Why Choose RepuPro?
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            What makes our process different and more effective
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Proven Results</h3>
            <p class="text-gray-600 dark:text-gray-300">
              95% success rate with average rating improvement of 2.1 stars within 30 days
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Ethical Practices</h3>
            <p class="text-gray-600 dark:text-gray-300">
              We use only legitimate, ethical methods that comply with platform guidelines
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Expert Team</h3>
            <p class="text-gray-600 dark:text-gray-300">
              12+ years of experience with certified reputation management specialists
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-orange-600 dark:text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Fast Results</h3>
            <p class="text-gray-600 dark:text-gray-300">
              30-day delivery guarantee with visible improvements starting within the first week
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Regular Updates</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Weekly progress reports and 24/7 access to your dedicated account manager
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-teal-600 dark:text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Money-Back Guarantee</h3>
            <p class="text-gray-600 dark:text-gray-300">
              30-day money-back guarantee if you're not completely satisfied with our services
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
          Join hundreds of businesses that have transformed their online reputation with our proven 3-step process.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Start Your Free Consultation
          </NuxtLink>
          <NuxtLink
            to="/pricing"
            class="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors"
          >
            View Pricing Plans
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
  name: "HowItWorksPage"
};
</script>
