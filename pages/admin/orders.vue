<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Admin Header -->
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center">
            <Icon name="ph:shield-check" class="h-8 w-8 text-pink-600 mr-3" />
            <h1 class="text-2xl font-bold text-gray-900">FantasyWorld Admin</h1>
          </div>
          <div class="flex items-center space-x-4">
            <NuxtLink
              to="/admin/dashboard"
              class="text-sm text-gray-600 hover:text-gray-800 font-medium"
            >
              Dashboard
            </NuxtLink>
            <span class="text-sm text-gray-600">{{ adminEmail }}</span>
            <button
              @click="handleLogout"
              class="text-sm text-red-600 hover:text-red-800 font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-2xl font-bold text-gray-900">Orders Management</h2>
        <div class="flex space-x-4">
          <select
            v-model="statusFilter"
            class="border border-gray-300 rounded-md px-3 py-2 text-sm"
          >
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search orders..."
            class="border border-gray-300 rounded-md px-3 py-2 text-sm"
          />
        </div>
      </div>

      <!-- Orders Table -->
      <div class="bg-white shadow rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Products</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="order in filteredOrders" :key="order.id">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    #{{ order.id }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div class="text-sm font-medium text-gray-900">{{ order.customer.name }}</div>
                      <div class="text-sm text-gray-500">{{ order.customer.phone }}</div>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-900">
                      <div v-for="item in order.items" :key="item.id" class="mb-1">
                        {{ item.name }} (x{{ item.quantity }})
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${{ order.total.toFixed(2) }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span
                      :class="[
                        'inline-flex px-2 py-1 text-xs font-semibold rounded-full',
                        getStatusClass(order.status)
                      ]"
                    >
                      {{ order.status }}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ formatDate(order.createdAt) }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      @click="viewOrder(order)"
                      class="text-pink-600 hover:text-pink-900 mr-3"
                    >
                      View
                    </button>
                    <button
                      @click="updateStatus(order)"
                      class="text-blue-600 hover:text-blue-900"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Order Details Modal -->
      <OrderModal
        v-if="showOrderModal"
        :order="selectedOrder"
        @close="showOrderModal = false"
        @update-status="updateOrderStatus"
      />
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

// Authentication check
onMounted(() => {
  if (localStorage.getItem('adminAuthenticated') !== 'true') {
    navigateTo('/admin/login');
  }
});

const adminEmail = ref(localStorage.getItem('adminEmail') || 'Admin');
const statusFilter = ref('');
const searchQuery = ref('');
const showOrderModal = ref(false);
const selectedOrder = ref(null);

// Sample orders data
const orders = ref([
  {
    id: 'ORD001',
    customer: {
      name: 'John Doe',
      phone: '+254 702 943 693',
      email: 'john@example.com'
    },
    items: [
      { id: 1, name: 'Sensual Rose Vibrator', quantity: 1, price: 89.99 },
      { id: 2, name: 'Couples Massage Oil', quantity: 2, price: 19.99 }
    ],
    total: 129.97,
    status: 'pending',
    createdAt: '2024-01-15T10:30:00Z',
    shippingAddress: 'Nairobi, Kenya',
    paymentMethod: 'WhatsApp Payment'
  },
  {
    id: 'ORD002',
    customer: {
      name: 'Jane Smith',
      phone: '+254 712 345 678',
      email: 'jane@example.com'
    },
    items: [
      { id: 3, name: 'Dual Stimulation Massager', quantity: 1, price: 109.99 }
    ],
    total: 109.99,
    status: 'confirmed',
    createdAt: '2024-01-14T15:20:00Z',
    shippingAddress: 'Mombasa, Kenya',
    paymentMethod: 'WhatsApp Payment'
  },
  {
    id: 'ORD003',
    customer: {
      name: 'Mike Johnson',
      phone: '+254 733 456 789',
      email: 'mike@example.com'
    },
    items: [
      { id: 4, name: 'Couples Bondage Set', quantity: 1, price: 129.99 },
      { id: 5, name: 'Silk Lingerie Set', quantity: 1, price: 89.99 }
    ],
    total: 219.98,
    status: 'shipped',
    createdAt: '2024-01-13T09:15:00Z',
    shippingAddress: 'Kisumu, Kenya',
    paymentMethod: 'WhatsApp Payment'
  }
]);

const filteredOrders = computed(() => {
  let filtered = orders.value;

  if (statusFilter.value) {
    filtered = filtered.filter(order => order.status === statusFilter.value);
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(order => 
      order.id.toLowerCase().includes(query) ||
      order.customer.name.toLowerCase().includes(query) ||
      order.customer.phone.includes(query)
    );
  }

  return filtered;
});

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
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const handleLogout = () => {
  localStorage.removeItem('adminAuthenticated');
  localStorage.removeItem('adminEmail');
  navigateTo('/admin/login');
};

const viewOrder = (order) => {
  selectedOrder.value = order;
  showOrderModal.value = true;
};

const updateStatus = (order) => {
  selectedOrder.value = order;
  showOrderModal.value = true;
};

const updateOrderStatus = (orderId, newStatus) => {
  const order = orders.value.find(o => o.id === orderId);
  if (order) {
    order.status = newStatus;
  }
  showOrderModal.value = false;
};
</script>
