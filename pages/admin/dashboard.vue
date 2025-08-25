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
      <!-- Navigation Tabs -->
      <div class="border-b border-gray-200 mb-8">
        <nav class="-mb-px flex space-x-8">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              activeTab === tab.id
                ? 'border-pink-500 text-pink-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
              'whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm'
            ]"
          >
            {{ tab.name }}
          </button>
        </nav>
      </div>

      <!-- Dashboard Overview -->
      <div v-if="activeTab === 'overview'" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <Icon name="ph:package" class="h-6 w-6 text-gray-400" />
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">Total Products</dt>
                    <dd class="text-lg font-medium text-gray-900">{{ totalProducts }}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <Icon name="ph:folders" class="h-6 w-6 text-gray-400" />
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">Categories</dt>
                    <dd class="text-lg font-medium text-gray-900">{{ categories.length }}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <Icon name="ph:users" class="h-6 w-6 text-gray-400" />
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">Active Users</dt>
                    <dd class="text-lg font-medium text-gray-900">1,234</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <Icon name="ph:trend-up" class="h-6 w-6 text-gray-400" />
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">Revenue</dt>
                    <dd class="text-lg font-medium text-gray-900">$12,345</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Products -->
        <div class="bg-white shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">Recent Products</h3>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="product in recentProducts" :key="product.id">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <img :src="product.image" :alt="product.name" class="h-10 w-10 rounded-lg object-cover" />
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">{{ product.name }}</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ product.category }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${{ product.price }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Products Management -->
      <div v-if="activeTab === 'products'" class="space-y-6">
        <div class="flex justify-between items-center">
          <h2 class="text-2xl font-bold text-gray-900">Products Management</h2>
          <button
            @click="showAddProductModal = true"
            class="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Add New Product
          </button>
        </div>

        <!-- Products Table -->
        <div class="bg-white shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="product in products" :key="product.id">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <img :src="product.image" :alt="product.name" class="h-10 w-10 rounded-lg object-cover" />
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">{{ product.name }}</div>
                          <div class="text-sm text-gray-500">{{ product.description.substring(0, 50) }}...</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ product.category }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${{ product.price }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        @click="editProduct(product)"
                        class="text-pink-600 hover:text-pink-900 mr-3"
                      >
                        Edit
                      </button>
                      <button
                        @click="deleteProduct(product.id)"
                        class="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Categories Management -->
      <div v-if="activeTab === 'categories'" class="space-y-6">
        <div class="flex justify-between items-center">
          <h2 class="text-2xl font-bold text-gray-900">Categories Management</h2>
          <button
            @click="showAddCategoryModal = true"
            class="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Add New Category
          </button>
        </div>

        <!-- Categories Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="category in categories"
            :key="category.id"
            class="bg-white shadow rounded-lg p-6"
          >
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-medium text-gray-900">{{ category.name }}</h3>
              <div class="flex space-x-2">
                <button
                  @click="editCategory(category)"
                  class="text-pink-600 hover:text-pink-900 text-sm"
                >
                  Edit
                </button>
                <button
                  @click="deleteCategory(category.id)"
                  class="text-red-600 hover:text-red-900 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
            <img :src="category.image" :alt="category.name" class="w-full h-32 object-cover rounded-lg mb-4" />
            <p class="text-sm text-gray-500">{{ category.description }}</p>
            <div class="mt-4 text-sm text-gray-600">
              {{ getProductsInCategory(category.id).length }} products
            </div>
          </div>
        </div>
      </div>

      <!-- Orders Management -->
      <div v-if="activeTab === 'orders'" class="space-y-6">
        <div class="flex justify-between items-center">
          <h2 class="text-2xl font-bold text-gray-900">Orders Management</h2>
          <NuxtLink
            to="/admin/orders"
            class="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            View All Orders
          </NuxtLink>
        </div>

        <!-- Recent Orders -->
        <div class="bg-white shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">Recent Orders</h3>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="order in recentOrders" :key="order.id">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #{{ order.id }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div class="text-sm font-medium text-gray-900">{{ order.customer.name }}</div>
                        <div class="text-sm text-gray-500">{{ order.customer.phone }}</div>
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
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add/Edit Product Modal -->
    <ProductModal
      v-if="showAddProductModal || showEditProductModal"
      :product="editingProduct"
      :categories="categories"
      :is-edit="showEditProductModal"
      @close="closeProductModal"
      @save="saveProduct"
    />

    <!-- Add/Edit Category Modal -->
    <CategoryModal
      v-if="showAddCategoryModal || showEditCategoryModal"
      :category="editingCategory"
      :is-edit="showEditCategoryModal"
      @close="closeCategoryModal"
      @save="saveCategory"
    />
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import ProductModal from '~/components/admin/ProductModal.vue';
import CategoryModal from '~/components/admin/CategoryModal.vue';

// Authentication check
onMounted(() => {
  if (localStorage.getItem('adminAuthenticated') !== 'true') {
    navigateTo('/admin/login');
  }
});

const adminEmail = ref(localStorage.getItem('adminEmail') || 'Admin');

const tabs = [
  { id: 'overview', name: 'Overview' },
  { id: 'products', name: 'Products' },
  { id: 'categories', name: 'Categories' },
  { id: 'orders', name: 'Orders' }
];

const activeTab = ref('overview');

// Modal states
const showAddProductModal = ref(false);
const showEditProductModal = ref(false);
const showAddCategoryModal = ref(false);
const showEditCategoryModal = ref(false);

const editingProduct = ref(null);
const editingCategory = ref(null);

// Sample data (in production, this would come from API/database)
const products = ref([]);
const categories = ref([]);

// Fetch data from API
const fetchProducts = async () => {
  try {
    const response = await $fetch('/api/products');
    products.value = response;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

const fetchCategories = async () => {
  try {
    const response = await $fetch('/api/categories');
    categories.value = response;
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

// Load data on mount
onMounted(async () => {
  if (localStorage.getItem('adminAuthenticated') !== 'true') {
    navigateTo('/admin/login');
  }
  await fetchProducts();
  await fetchCategories();
});

const totalProducts = computed(() => products.value.length);
const recentProducts = computed(() => products.value.slice(0, 5));

const getProductsInCategory = (categoryId) => {
  return products.value.filter(product => {
    const category = categories.value.find(cat => cat.id === categoryId);
    return category && product.category === category.name;
  });
};

const handleLogout = () => {
  localStorage.removeItem('adminAuthenticated');
  localStorage.removeItem('adminEmail');
  navigateTo('/admin/login');
};

const editProduct = (product) => {
  editingProduct.value = { ...product };
  showEditProductModal.value = true;
};

const deleteProduct = async (productId) => {
  if (confirm('Are you sure you want to delete this product?')) {
    try {
      await $fetch(`/api/products/${productId}`, {
        method: 'DELETE'
      });
      
      // Refresh the products list
      await fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Error deleting product. Please try again.');
    }
  }
};

const editCategory = (category) => {
  editingCategory.value = { ...category };
  showEditCategoryModal.value = true;
};

const deleteCategory = (categoryId) => {
  if (confirm('Are you sure you want to delete this category?')) {
    categories.value = categories.value.filter(c => c.id !== categoryId);
  }
};

const closeProductModal = () => {
  console.log('Closing product modal');
  showAddProductModal.value = false;
  showEditProductModal.value = false;
  editingProduct.value = null;
};

const closeCategoryModal = () => {
  console.log('Closing category modal');
  showAddCategoryModal.value = false;
  showEditCategoryModal.value = false;
  editingCategory.value = null;
};

const saveProduct = async (productData) => {
  console.log('Saving product:', productData);
  try {
    if (showEditProductModal.value) {
      // Edit existing product
      await $fetch(`/api/products/${productData.id}`, {
        method: 'PUT',
        body: productData
      });
    } else {
      // Add new product
      await $fetch('/api/products', {
        method: 'POST',
        body: productData
      });
    }
    
    // Refresh the products list
    await fetchProducts();
    closeProductModal();
  } catch (error) {
    console.error('Error saving product:', error);
    alert('Error saving product. Please try again.');
  }
};

const saveCategory = (categoryData) => {
  if (showEditCategoryModal.value) {
    // Edit existing category
    const index = categories.value.findIndex(c => c.id === categoryData.id);
    if (index !== -1) {
      categories.value[index] = categoryData;
    }
  } else {
    // Add new category
    const newCategory = {
      ...categoryData,
      id: Date.now() // Simple ID generation
    };
    categories.value.push(newCategory);
  }
  closeCategoryModal();
};

// Sample orders data
const orders = ref([
  {
    id: 'ORD001',
    customer: {
      name: 'John Doe',
      phone: '+254 702 943 693'
    },
    total: 129.97,
    status: 'pending',
    createdAt: '2024-01-15T10:30:00Z'
  },
  {
    id: 'ORD002',
    customer: {
      name: 'Jane Smith',
      phone: '+254 712 345 678'
    },
    total: 109.99,
    status: 'confirmed',
    createdAt: '2024-01-14T15:20:00Z'
  },
  {
    id: 'ORD003',
    customer: {
      name: 'Mike Johnson',
      phone: '+254 733 456 789'
    },
    total: 219.98,
    status: 'shipped',
    createdAt: '2024-01-13T09:15:00Z'
  }
]);

const recentOrders = computed(() => orders.value.slice(0, 5));

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
    day: 'numeric'
  });
};
</script>
