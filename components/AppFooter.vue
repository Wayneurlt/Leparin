<template>
  <footer class="bg-gray-800 dark:bg-gray-900 text-gray-300 py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">RepuPro</h3>
          <p class="mb-4">
            Professional online reputation management services helping businesses 
            build trust and improve their online presence since 2012.
          </p>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">Services</h3>
          <ul class="space-y-2">
            <li v-for="service in services" :key="service.path">
              <NuxtLink :to="service.path" class="hover:text-white transition-colors">
                {{ service.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Company Links -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">Company</h3>
          <ul class="space-y-2">
            <li v-for="link in companyLinks" :key="link.path">
              <NuxtLink :to="link.path" class="hover:text-white transition-colors">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">Contact Info</h3>
          <div class="space-y-2">
            <p v-for="contact in contactInfo" :key="contact.label" class="flex items-center">
              <component 
                :is="contact.icon" 
                class="w-4 h-4 mr-2 text-gray-400"
                v-if="contact.icon"
              />
              <span v-if="contact.type === 'link'">
                <a :href="contact.value" class="hover:text-white transition-colors">
                  {{ contact.label }}
                </a>
              </span>
              <span v-else>{{ contact.label }}</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
        <p>
          © {{ currentYear }} RepuPro. All rights reserved. | 
          <NuxtLink to="/terms" class="hover:text-white transition-colors">Terms of Service</NuxtLink> | 
          <NuxtLink to="/refund" class="hover:text-white transition-colors">Refund Policy</NuxtLink>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      services: [
        { path: '/services', label: 'Online Reviews' },
        { path: '/services', label: 'Reputation Management' },
        { path: '/services', label: 'Local SEO' },
        { path: '/services', label: 'Directory Reviews' },
        { path: '/services', label: 'Review Monitoring' }
      ],
      companyLinks: [
        { path: '/about', label: 'About Us' },
        { path: '/testimonials', label: 'Testimonials' },
        { path: '/faq', label: 'FAQ' },
        { path: '/contact', label: 'Contact Us' },
        { path: '/privacy', label: 'Privacy Policy' }
      ],
      contactInfo: [
        { label: '1234 Business Ave, Suite 567', type: 'text' },
        { label: 'New York, NY 10001', type: 'text' },
        { 
          label: 'info@repupro.com', 
          type: 'link', 
          value: 'mailto:info@repupro.com',
          icon: 'MailIcon'
        },
        { 
          label: '(555) 123-4567', 
          type: 'link', 
          value: 'tel:+15551234567',
          icon: 'PhoneIcon'
        },
        { 
          label: '+1 (555) 123-4567', 
          type: 'link', 
          value: 'https://wa.me/15551234567',
          icon: 'ChatIcon'
        }
      ]
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>
