<template>
  <div class="fixed inset-0 z-[9999] overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <!-- Background overlay -->
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75" @click="$emit('close')"></div>
      </div>

      <!-- Modal content -->
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full relative z-[10000]">
        <form @submit.prevent="handleSubmit">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">
                  {{ isEdit ? 'Edit Product' : 'Add New Product' }}
                </h3>
                
                <div class="space-y-4">
                  <!-- Product Name -->
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">Product Name</label>
                    <input
                      id="name"
                      v-model="formData.name"
                      type="text"
                      required
                      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                      placeholder="Enter product name"
                    />
                  </div>

                  <!-- Description -->
                  <div>
                    <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                      id="description"
                      v-model="formData.description"
                      rows="3"
                      required
                      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                      placeholder="Enter product description"
                    ></textarea>
                  </div>

                  <!-- Category -->
                  <div>
                    <label for="category" class="block text-sm font-medium text-gray-700">
                      Category
                    </label>
                    <select
                      id="category"
                      v-model="formData.categoryId"
                      required
                      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                    >
                      <option value="">Select a category</option>
                      <option v-for="category in categories" :key="category.id" :value="category.id">
                        {{ category.name }}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label for="targetGender" class="block text-sm font-medium text-gray-700">
                      Target Gender
                    </label>
                    <select
                      id="targetGender"
                      v-model="formData.targetGender"
                      required
                      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                    >
                      <option value="all">All</option>
                      <option value="women">Women</option>
                      <option value="men">Men</option>
                      <option value="couples">Couples</option>
                    </select>
                  </div>

                  <div>
                    <label for="price" class="block text-sm font-medium text-gray-700">
                      Price ($)
                    </label>
                    <input
                      id="price"
                      v-model="formData.price"
                      type="number"
                      step="0.01"
                      min="0"
                      required
                      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                    />
                  </div>

                  <div>
                    <label for="image" class="block text-sm font-medium text-gray-700">
                      Image URL
                    </label>
                    <input
                      id="image"
                      v-model="formData.image"
                      type="url"
                      required
                      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                    />
                  </div>

                  <div class="flex items-center">
                    <input
                      id="inStock"
                      v-model="formData.inStock"
                      type="checkbox"
                      class="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                    />
                    <label for="inStock" class="ml-2 block text-sm text-gray-900">
                      In Stock
                    </label>
                  </div>

                  <!-- Features -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Features</label>
                    <div class="space-y-2">
                      <div v-for="(feature, index) in formData.features" :key="index" class="flex">
                        <input
                          v-model="formData.features[index]"
                          type="text"
                          class="flex-1 border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                          placeholder="Enter feature"
                        />
                        <button
                          type="button"
                          @click="removeFeature(index)"
                          class="ml-2 text-red-600 hover:text-red-800"
                        >
                          <Icon name="ph:trash" class="h-5 w-5" />
                        </button>
                      </div>
                      <div class="flex">
                        <input
                          v-model="newFeature"
                          type="text"
                          class="flex-1 border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                          placeholder="Enter new feature"
                        />
                        <button
                          type="button"
                          @click="addFeature"
                          class="ml-2 text-pink-600 hover:text-pink-800 text-sm font-medium"
                        >
                          <Icon name="ph:plus" class="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- Gallery Images -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Gallery Images</label>
                    <div class="space-y-2">
                      <div v-for="(image, index) in formData.gallery" :key="index" class="flex">
                        <input
                          v-model="formData.gallery[index]"
                          type="url"
                          class="flex-1 border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                          placeholder="https://example.com/gallery-image.jpg"
                        />
                        <button
                          type="button"
                          @click="removeGalleryImage(index)"
                          class="ml-2 text-red-600 hover:text-red-800"
                        >
                          <Icon name="ph:trash" class="h-5 w-5" />
                        </button>
                      </div>
                      <button
                        type="button"
                        @click="addGalleryImage"
                        class="text-pink-600 hover:text-pink-800 text-sm font-medium"
                      >
                        + Add Gallery Image
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="submit"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-600 text-base font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              {{ isEdit ? 'Update Product' : 'Add Product' }}
            </button>
            <button
              type="button"
              @click="$emit('close')"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
  product: {
    type: Object,
    default: null
  },
  categories: {
    type: Array,
    required: true
  },
  isEdit: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close', 'save']);

const formData = ref({
  name: '',
  description: '',
  price: '',
  image: '',
  categoryId: '',
  features: [],
  gallery: [],
  targetGender: 'all',
  inStock: true
});

const newFeature = ref('');

// Initialize form data when editing
onMounted(() => {
  if (props.isEdit && props.product) {
    formData.value = {
      ...props.product,
      features: props.product.features || [],
      gallery: props.product.gallery || []
    };
  }
});

const addFeature = () => {
  if (newFeature.value.trim()) {
    formData.value.features.push(newFeature.value.trim());
    newFeature.value = '';
  }
};

const removeFeature = (index) => {
  formData.value.features.splice(index, 1);
};

const addGalleryImage = () => {
  if (formData.value.image && !formData.value.gallery.includes(formData.value.image)) {
    formData.value.gallery.push(formData.value.image);
  }
};

const removeGalleryImage = (index) => {
  formData.value.gallery.splice(index, 1);
};

const handleSubmit = () => {
  // Clean up empty features and gallery images
  const cleanData = {
    ...formData.value,
    features: formData.value.features.filter(f => f.trim() !== ''),
    gallery: formData.value.gallery.filter(g => g.trim() !== ''),
    price: parseFloat(formData.value.price)
  };

  emit('save', cleanData);
};
</script>
