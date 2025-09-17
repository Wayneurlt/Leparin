<template>
  <div>
    <AppHeader />
    
    <!-- Hero Section -->
    <HeroSection 
      title="About Obscenda"
      description="We've been helping businesses protect and enhance their online reputation for over 12 years. Our mission is to build trust and credibility in the digital world."
    />

    <!-- Our Story -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Our Story
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Founded in 2012, Obscenda was born from a simple observation: businesses were struggling to manage their online reputation in an increasingly digital world. What started as a small team of reputation management experts has grown into a trusted partner for hundreds of businesses nationwide.
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
              We understand that your online reputation is often the first impression potential customers have of your business. That's why we've dedicated ourselves to helping businesses not just manage their reputation, but actively improve it through strategic, ethical, and effective methods.
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-300">
              Today, we're proud to have helped over 500 businesses across various industries improve their online presence, increase customer trust, and drive more business through positive reviews and reputation management.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Obscenda Team" 
              class="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Why Trust Us -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Why Trust Obscenda?
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Our proven track record and commitment to excellence set us apart
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <div class="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">12+ Years Experience</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Over a decade of experience in online reputation management, giving us deep insights into what works and what doesn't.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <div class="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Ethical Practices</h3>
            <p class="text-gray-600 dark:text-gray-300">
              We follow strict ethical guidelines and only use legitimate methods to improve your online reputation.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <div class="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">500+ Happy Clients</h3>
            <p class="text-gray-600 dark:text-gray-300">
              We've successfully helped hundreds of businesses improve their online reputation and customer trust.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <div class="bg-orange-100 dark:bg-orange-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Fast Results</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Our proven strategies deliver visible improvements in your online reputation within 30 days.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <div class="bg-red-100 dark:bg-red-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">24/7 Monitoring</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Round-the-clock monitoring ensures we catch and address any reputation issues immediately.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <div class="bg-teal-100 dark:bg-teal-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Money-Back Guarantee</h3>
            <p class="text-gray-600 dark:text-gray-300">
              We're so confident in our services that we offer a 30-day satisfaction guarantee.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Our Core Values
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            The principles that guide everything we do
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex items-start space-x-4">
            <div class="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Integrity</h3>
              <p class="text-gray-600 dark:text-gray-300">
                We believe in honest, transparent practices that build genuine trust and long-term relationships with our clients.
              </p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Excellence</h3>
              <p class="text-gray-600 dark:text-gray-300">
                We strive for excellence in everything we do, from customer service to the quality of our reputation management strategies.
              </p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Partnership</h3>
              <p class="text-gray-600 dark:text-gray-300">
                We view our relationship with clients as a true partnership, working together to achieve their reputation goals.
              </p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="bg-orange-100 dark:bg-orange-900 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Innovation</h3>
              <p class="text-gray-600 dark:text-gray-300">
                We continuously innovate and adapt our strategies to stay ahead of the ever-changing digital landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CTASection 
      title="Ready to Improve Your Online Reputation?"
      description="Join hundreds of businesses that trust Obscenda to protect and enhance their online presence. Get started today and see the difference professional reputation management can make."
      :buttons="[
        { text: 'Get Started Today', path: '/contact', primary: true },
        { text: 'View Our Services', path: '/services', primary: false }
      ]"
    />

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script>
export default {
  name: "AboutPage"
};
</script>
