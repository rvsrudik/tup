<template>
  <div
    class="custom-scrollbar flex-grow overflow-y-auto p-4 rounded-2xl bg-white"
  >
    <!-- Перевірка стану завантаження даних -->
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">Error loading data.</div>
    <div v-else>
      <ChatMessage
        v-for="message in messages"
        :key="message.id"
        :name="message.name"
        :date="message.date"
        :text="message.text"
        :avatar="message.avatar"
        :files="message.files"
        :isViewed="message.isViewed"
      />
    </div>
  </div>
</template>

<script setup>
import ChatMessage from './ChatMessage.vue';

const messages = ref([]);
const isLoading = ref(true);
const error = ref(null);

const fetchMessages = async () => {
  try {
    const response = await fetch(
      'https://66d86ce037b1cadd80549f70.mockapi.io/chat'
    );
    if (!response.ok) {
      throw new Error('Failed to fetch messages');
    }
    const data = await response.json();
    messages.value = data;
  } catch (err) {
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchMessages();
});
</script>

<style scoped>
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #dab8d5 transparent;
}
</style>
