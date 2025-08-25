<template>
  <div class="fixed inset-0 z-50 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <!-- Background overlay -->
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75" @click="$emit('close')"></div>
      </div>

      <!-- Modal content -->
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <form @submit.prevent="handleSubmit">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">
                  {{ isEdit ? 'Edit Category' : 'Add New Category' }}
                </h3>
                
                <div class="space-y-4">
                  <!-- Category Name -->
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">Category Name</label>
                    <input
                      id="name"
                      v-model="formData.name"
                      type="text"
                      required
                      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                      placeholder="Enter category name"
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
                      placeholder="Enter category description"
                    ></textarea>
                  </div>

                  <!-- Image URL -->
                  <div>
                    <label for="image" class="block text-sm font-medium text-gray-700">Image URL</label>
                    <input
                      id="image"
                      v-model="formData.image"
                      type="url"
                      required
                      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                      placeholder="https://example.com/category-image.jpg"
                    />
                  </div>

                  <!-- Image Preview -->
                  <div v-if="formData.image" class="mt-2">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Image Preview</label>
                    <img
                      :src="formData.image"
                      :alt="formData.name"
                      class="w-full h-32 object-cover rounded-lg border border-gray-300"
                      @error="handleImageError"
                    />
                  </div>

                  <!-- Target Gender -->
                  <div>
                    <label for="targetGender" class="block text-sm font-medium text-gray-700">Target Gender</label>
                    <select
                      id="targetGender"
                      v-model="formData.targetGender"
                      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                    >
                      <option value="">All Genders</option>
                      <option value="women">Women</option>
                      <option value="men">Men</option>
                      <option value="couples">Couples</option>
                    </select>
                  </div>

                  <!-- Sort Order -->
                  <div>
                    <label for="sortOrder" class="block text-sm font-medium text-gray-700">Sort Order</label>
                    <input
                      id="sortOrder"
                      v-model="formData.sortOrder"
                      type="number"
                      min="0"
                      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                      placeholder="0"
                    />
                    <p class="mt-1 text-sm text-gray-500">Lower numbers appear first</p>
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
              {{ isEdit ? 'Update Category' : 'Add Category' }}
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
const props = defineProps({
  category: {
    type: Object,
    default: null
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
  image: '',
  targetGender: '',
  sortOrder: 0
});

// Initialize form data when editing
onMounted(() => {
  if (props.isEdit && props.category) {
    formData.value = {
      ...props.category,
      sortOrder: props.category.sortOrder || 0
    };
  }
});

const handleImageError = (event) => {
  event.target.style.display = 'none';
};

const handleSubmit = () => {
  const cleanData = {
    ...formData.value,
    sortOrder: parseInt(formData.value.sortOrder) || 0
  };

  emit('save', cleanData);
};
</script>
