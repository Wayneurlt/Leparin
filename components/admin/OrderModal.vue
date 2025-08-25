<template>
  <div class="fixed inset-0 z-50 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <!-- Background overlay -->
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75" @click="$emit('close')"></div>
      </div>

      <!-- Modal content -->
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Order #{{ order?.id }}
                </h3>
                <button
                  @click="$emit('close')"
                  class="text-gray-400 hover:text-gray-600"
                >
                  <Icon name="ph:x" class="h-6 w-6" />
                </button>
              </div>
              
              <div v-if="order" class="space-y-6">
                <!-- Customer Information -->
                <div>
                  <h4 class="text-md font-medium text-gray-900 mb-3">Customer Information</h4>
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <div class="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span class="font-medium text-gray-700">Name:</span>
                        <p class="text-gray-900">{{ order.customer.name }}</p>
                      </div>
                      <div>
                        <span class="font-medium text-gray-700">Phone:</span>
                        <p class="text-gray-900">{{ order.customer.phone }}</p>
                      </div>
                      <div>
                        <span class="font-medium text-gray-700">Email:</span>
                        <p class="text-gray-900">{{ order.customer.email }}</p>
                      </div>
                      <div>
                        <span class="font-medium text-gray-700">Address:</span>
                        <p class="text-gray-900">{{ order.shippingAddress }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Order Items -->
                <div>
                  <h4 class="text-md font-medium text-gray-900 mb-3">Order Items</h4>
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <div v-for="item in order.items" :key="item.id" class="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <div>
                        <p class="font-medium text-gray-900">{{ item.name }}</p>
                        <p class="text-sm text-gray-500">Quantity: {{ item.quantity }}</p>
                      </div>
                      <div class="text-right">
                        <p class="font-medium text-gray-900">${{ (item.price * item.quantity).toFixed(2) }}</p>
                        <p class="text-sm text-gray-500">${{ item.price.toFixed(2) }} each</p>
                      </div>
                    </div>
                    <div class="flex justify-between items-center pt-3 border-t border-gray-200 mt-3">
                      <span class="font-bold text-lg text-gray-900">Total:</span>
                      <span class="font-bold text-lg text-gray-900">${{ order.total.toFixed(2) }}</span>
                    </div>
                  </div>
                </div>

                <!-- Order Details -->
                <div>
                  <h4 class="text-md font-medium text-gray-900 mb-3">Order Details</h4>
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <div class="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span class="font-medium text-gray-700">Order Date:</span>
                        <p class="text-gray-900">{{ formatDate(order.createdAt) }}</p>
                      </div>
                      <div>
                        <span class="font-medium text-gray-700">Payment Method:</span>
                        <p class="text-gray-900">{{ order.paymentMethod }}</p>
                      </div>
                      <div>
                        <span class="font-medium text-gray-700">Current Status:</span>
                        <span
                          :class="[
                            'inline-flex px-2 py-1 text-xs font-semibold rounded-full',
                            getStatusClass(order.status)
                          ]"
                        >
                          {{ order.status }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Status Update -->
                <div>
                  <h4 class="text-md font-medium text-gray-900 mb-3">Update Status</h4>
                  <div class="flex space-x-3">
                    <select
                      v-model="newStatus"
                      class="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-pink-500 focus:border-pink-500"
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                    <button
                      @click="updateStatus"
                      :disabled="newStatus === order.status"
                      class="bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-md text-sm font-medium"
                    >
                      Update
                    </button>
                  </div>
                </div>

                <!-- WhatsApp Contact -->
                <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div class="flex items-center">
                    <Icon name="ph:whatsapp-logo" class="h-6 w-6 text-green-600 mr-3" />
                    <div>
                      <h5 class="font-medium text-green-900">Contact Customer</h5>
                      <p class="text-sm text-green-700">Send WhatsApp message to customer</p>
                    </div>
                    <a
                      :href="generateWhatsAppLink"
                      target="_blank"
                      class="ml-auto bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                    >
                      Send Message
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            @click="$emit('close')"
            class="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
  order: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['close', 'update-status']);

const newStatus = ref(props.order?.status || 'pending');

const getStatusClass = (status) => {
  const classes = {
    pending: 'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-blue-100 text-blue-800',
    shipped: 'bg-purple-100 text-purple-800',
    delivered: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800'
  };
  return classes[status] || 'bg-gray-100 text-gray-800';
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const generateWhatsAppLink = computed(() => {
  if (!props.order) return '';
  
  const phoneNumber = '254702943693';
  const message = `Hi ${props.order.customer.name}, regarding your order #${props.order.id} from FantasyWorld. Current status: ${props.order.status}. Total: $${props.order.total.toFixed(2)}.`;
  
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
});

const updateStatus = () => {
  if (newStatus.value !== props.order.status) {
    emit('update-status', props.order.id, newStatus.value);
  }
};

// Update newStatus when order changes
watch(() => props.order?.status, (newVal) => {
  if (newVal) {
    newStatus.value = newVal;
  }
});
</script>
