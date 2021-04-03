<template>
  <h1>{{ msg }}</h1>

  <h2>Vue 3 Bootstrap 5 simple modal component</h2>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

   <button @click="openModal()" type="button" class="btn btn-success mb-2">Open Modal</button>
  <Modal v-model="modal" header="Modal">
    <p>This modal have to be closed from the parent</p>
    <p>This modal will be close from the parent in 5 seconds</p>
  </Modal>

  <br>

  <button @click="closeableModal = true" type="button" class="btn btn-success mb-2">Open Closeable Modal</button>
  <Modal v-model="closeableModal" closeable header="Closeable Modal">
    <p>You can close this modal using the close button on the top right corner</p>
  </Modal>  
</template>

<script setup>
import { defineProps, reactive, ref } from 'vue'

import Modal from './Modal.vue'

defineProps({
  msg: String
})

const closeableModal = ref(false);

const modal = ref(false);

const openModal = () => {
  modal.value = true;
  setTimeout(() => {
    modal.value = false;
  }, 5000);
}

</script>

<style scoped>
a {
  color: #42b983;
}
</style>