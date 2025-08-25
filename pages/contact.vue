<template>
  <div>
    <AppHeader />
    
    <!-- Hero Section -->
    <HeroSection 
      title="Contact Us"
      description="Ready to improve your online reputation? Get in touch with our team of experts. We're here to help you protect and enhance your business's online presence."
    />

    <!-- Contact Section -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div>
            <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Send Us a Message
            </h2>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    v-model="form.firstName"
                    required
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    v-model="form.lastName"
                    required
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  v-model="form.phone"
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label for="business" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  id="business"
                  v-model="form.business"
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Your business name"
                />
              </div>

              <div>
                <label for="service" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  v-model="form.service"
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select a service</option>
                  <option value="online-reviews">Online Reviews</option>
                  <option value="reputation-management">Reputation Management</option>
                  <option value="local-seo">Local SEO</option>
                  <option value="directory-reviews">Directory Reviews</option>
                  <option value="review-monitoring">Review Monitoring</option>
                  <option value="custom">Custom Package</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Tell us about your reputation management needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div>
            <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Get in Touch
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We're here to help you improve your online reputation. Contact us through any of the methods below.
            </p>

            <div class="space-y-6">
              <!-- Phone -->
              <div class="flex items-start space-x-4">
                <div class="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-1">Phone</h3>
                  <p class="text-gray-600 dark:text-gray-300 mb-2">(555) 123-4567</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Monday - Friday, 9 AM - 6 PM EST</p>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start space-x-4">
                <div class="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-1">Email</h3>
                  <p class="text-gray-600 dark:text-gray-300 mb-2">info@repupro.com</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">We typically respond within 24 hours</p>
                </div>
              </div>

              <!-- WhatsApp -->
              <div class="flex items-start space-x-4">
                <div class="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="h-6 w-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-1">WhatsApp</h3>
                  <p class="text-gray-600 dark:text-gray-300 mb-2">+1 (555) 123-4567</p>
                  <a href="https://wa.me/15551234567" target="_blank" class="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300">
                    <span>Chat with us</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              <!-- Address -->
              <div class="flex items-start space-x-4">
                <div class="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-1">Office Address</h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    1234 Business Ave, Suite 567<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            <!-- Business Hours -->
            <div class="mt-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">Business Hours</h3>
              <div class="space-y-2 text-gray-600 dark:text-gray-300">
                <div class="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </div>
                <div class="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM EST</span>
                </div>
                <div class="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Quick answers to common questions about our services
          </p>
        </div>

        <div class="max-w-3xl mx-auto space-y-6">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              How quickly can you improve my online reputation?
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Most clients see noticeable improvements within 30 days. However, the timeline varies depending on the severity of your reputation issues and the services you choose.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Are your review generation services ethical?
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Absolutely. We only use legitimate methods to generate reviews. We never create fake reviews or violate platform terms of service.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Do you offer a money-back guarantee?
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Yes, we offer a 30-day satisfaction guarantee. If you're not completely satisfied with our services, we'll refund your money.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Can you help with negative review removal?
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Yes, we can help remove negative reviews that violate platform policies. We also work to suppress negative content through positive review generation.
            </p>
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
  name: "ContactPage",
  data() {
    return {
      isSubmitting: false,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        business: '',
        service: '',
        message: ''
      }
    };
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        business: '',
        service: '',
        message: ''
      };
      
      this.isSubmitting = false;
      
      // Show success message (you can implement a toast notification here)
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    }
  },
};
</script>
