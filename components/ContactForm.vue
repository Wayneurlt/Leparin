<template>
  <form @submit.prevent="submitForm" class="space-y-6">
    <!-- Name Fields -->
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

    <!-- Email Field -->
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
        placeholder="your@email.com"
      />
    </div>

    <!-- Phone Field -->
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

    <!-- Business Name Field -->
    <div>
      <label for="businessName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Business Name
      </label>
      <input
        type="text"
        id="businessName"
        v-model="form.businessName"
        class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
        placeholder="Your business name"
      />
    </div>

    <!-- Service Interest Field -->
    <div>
      <label for="serviceInterest" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Service Interest
      </label>
      <select
        id="serviceInterest"
        v-model="form.serviceInterest"
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

    <!-- Message Field -->
    <div>
      <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Message *
      </label>
      <textarea
        id="message"
        v-model="form.message"
        required
        rows="4"
        class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
        placeholder="Tell us about your reputation management needs..."
      ></textarea>
    </div>

    <!-- Submit Button -->
    <button
      type="submit"
      :disabled="isSubmitting"
      class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-3 px-6 rounded-lg transition-colors"
    >
      {{ isSubmitting ? 'Sending...' : submitButtonText }}
    </button>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  props: {
    submitButtonText: {
      type: String,
      default: 'Send Message'
    }
  },
  data() {
    return {
      isSubmitting: false,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        businessName: '',
        serviceInterest: '',
        message: ''
      }
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      
      try {
        // Emit form data to parent component
        this.$emit('form-submitted', this.form);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Reset form
        this.form = {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          businessName: '',
          serviceInterest: '',
          message: ''
        };
        
        // Emit success event
        this.$emit('form-success');
        
      } catch (error) {
        // Emit error event
        this.$emit('form-error', error);
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
</script>
