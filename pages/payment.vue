<template>
  <div>
    <!-- Hero Section -->
    <HeroSection 
      title="Secure Payment"
      description="Complete your purchase securely with our trusted payment partners"
    />

    <!-- Payment Section -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Order Summary -->
            <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-8">
              <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">Order Summary</h2>
              
              <div class="space-y-4 mb-6">
                <div class="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                  <div>
                    <h3 class="font-semibold text-gray-800 dark:text-white">{{ selectedPackage.name }}</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300">{{ selectedPackage.description }}</p>
                  </div>
                  <span class="font-bold text-gray-800 dark:text-white">${{ selectedPackage.price }}</span>
                </div>
                
                <div v-if="selectedAddons.length > 0" class="space-y-2">
                  <div v-for="addon in selectedAddons" :key="addon.id" class="flex justify-between items-center py-2">
                    <span class="text-gray-600 dark:text-gray-300">{{ addon.name }}</span>
                    <span class="font-semibold text-gray-800 dark:text-white">${{ addon.price }}</span>
                  </div>
                </div>
              </div>

              <div class="border-t border-gray-200 dark:border-gray-600 pt-4">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-gray-600 dark:text-gray-300">Subtotal:</span>
                  <span class="font-semibold text-gray-800 dark:text-white">${{ subtotal }}</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                  <span class="text-gray-600 dark:text-gray-300">Tax:</span>
                  <span class="font-semibold text-gray-800 dark:text-white">${{ tax }}</span>
                </div>
                <div class="flex justify-between items-center text-lg font-bold text-gray-800 dark:text-white">
                  <span>Total:</span>
                  <span>${{ total }}</span>
                </div>
              </div>

              <!-- Security Badges -->
              <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                <div class="flex items-center justify-center space-x-4">
                  <div class="flex items-center text-green-600 dark:text-green-400">
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm font-medium">SSL Secure</span>
                  </div>
                  <div class="flex items-center text-blue-600 dark:text-blue-400">
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="text-sm font-medium">PCI Compliant</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Payment Form -->
            <div class="bg-white dark:bg-gray-700 rounded-xl p-8 border border-gray-200 dark:border-gray-600">
              <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">Payment Information</h2>
              
              <form @submit.prevent="processPayment" class="space-y-6">
                <!-- Contact Information -->
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">Contact Information</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label for="firstName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        v-model="paymentForm.firstName"
                        required
                        class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label for="lastName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        v-model="paymentForm.lastName"
                        required
                        class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div class="mt-4">
                    <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      v-model="paymentForm.email"
                      required
                      class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div class="mt-4">
                    <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      v-model="paymentForm.phone"
                      required
                      class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <!-- Business Information -->
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">Business Information</h3>
                  <div>
                    <label for="businessName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      v-model="paymentForm.businessName"
                      required
                      class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                      placeholder="Your Business Name"
                    />
                  </div>
                  <div class="mt-4">
                    <label for="businessWebsite" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Business Website
                    </label>
                    <input
                      type="url"
                      id="businessWebsite"
                      v-model="paymentForm.businessWebsite"
                      class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                      placeholder="https://yourbusiness.com"
                    />
                  </div>
                </div>

                <!-- Payment Method Selection -->
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">Payment Method</h3>
                  <div class="space-y-3">
                    <label class="flex items-center p-4 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600">
                      <input
                        type="radio"
                        v-model="paymentForm.paymentMethod"
                        value="stripe"
                        class="mr-3"
                      />
                      <div class="flex items-center">
                        <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center mr-3">
                          <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                          </svg>
                        </div>
                        <div>
                          <div class="font-medium text-gray-800 dark:text-white">Credit/Debit Card</div>
                          <div class="text-sm text-gray-600 dark:text-gray-300">Visa, Mastercard, American Express</div>
                        </div>
                      </div>
                    </label>

                    <label class="flex items-center p-4 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600">
                      <input
                        type="radio"
                        v-model="paymentForm.paymentMethod"
                        value="paypal"
                        class="mr-3"
                      />
                      <div class="flex items-center">
                        <div class="w-8 h-8 bg-blue-500 rounded flex items-center justify-center mr-3">
                          <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <div class="font-medium text-gray-800 dark:text-white">PayPal</div>
                          <div class="text-sm text-gray-600 dark:text-gray-300">Pay with your PayPal account</div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                <!-- Terms and Conditions -->
                <div class="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    v-model="paymentForm.agreeToTerms"
                    required
                    class="mt-1 mr-3"
                  />
                  <label for="terms" class="text-sm text-gray-600 dark:text-gray-300">
                    I agree to the <NuxtLink to="/terms" class="text-blue-600 dark:text-blue-400 hover:underline">Terms of Service</NuxtLink> and 
                    <NuxtLink to="/privacy" class="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</NuxtLink>
                  </label>
                </div>

                <!-- Payment Buttons -->
                <div class="space-y-4">
                  <button
                    v-if="paymentForm.paymentMethod === 'stripe'"
                    type="submit"
                    :disabled="isProcessing"
                    class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    <svg v-if="isProcessing" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {{ isProcessing ? 'Processing...' : `Pay $${total} with Card` }}
                  </button>

                  <button
                    v-if="paymentForm.paymentMethod === 'paypal'"
                    type="submit"
                    :disabled="isProcessing"
                    class="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    <svg v-if="isProcessing" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {{ isProcessing ? 'Processing...' : `Pay $${total} with PayPal` }}
                  </button>
                </div>

                <!-- Security Notice -->
                <div class="text-center text-sm text-gray-600 dark:text-gray-300">
                  <p>🔒 Your payment information is encrypted and secure</p>
                  <p>💳 We never store your credit card information</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Indicators -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Why Trust RepuPro?
          </h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Secure Payments</h3>
            <p class="text-gray-600 dark:text-gray-300">All transactions are encrypted and processed through secure payment gateways</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Money-Back Guarantee</h3>
            <p class="text-gray-600 dark:text-gray-300">30-day money-back guarantee if you're not satisfied with our services</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">24/7 Support</h3>
            <p class="text-gray-600 dark:text-gray-300">Our customer support team is available around the clock to help you</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script>
export default {
  name: "PaymentPage",
  data() {
    return {
      isProcessing: false,
      selectedPackage: {
        name: "Professional Reputation Management",
        description: "Comprehensive reputation management package",
        price: 599
      },
      selectedAddons: [
        {
          id: 1,
          name: "Review Monitoring",
          price: 99
        },
        {
          id: 2,
          name: "Local SEO Optimization",
          price: 149
        }
      ],
      paymentForm: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        businessName: "",
        businessWebsite: "",
        paymentMethod: "stripe",
        agreeToTerms: false
      }
    };
  },
  computed: {
    subtotal() {
      return this.selectedPackage.price + this.selectedAddons.reduce((sum, addon) => sum + addon.price, 0);
    },
    tax() {
      return Math.round(this.subtotal * 0.08); // 8% tax
    },
    total() {
      return this.subtotal + this.tax;
    }
  },
  methods: {
    async processPayment() {
      this.isProcessing = true;
      
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message (in a real app, this would redirect to success page)
      alert("Payment processed successfully! You will receive a confirmation email shortly.");
      
      this.isProcessing = false;
    }
  }
};
</script>
