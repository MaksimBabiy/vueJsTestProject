<template>
  <div class="modal-container">
    <div class="modal-body">
      <span class="modal-close" @click="onHandleModal">🗙</span>
      <h2>Add the User</h2>
      <Form />
    </div>
  </div>
</template>
<script setup lang="ts">
import Form from './Form.vue'
interface Props {
  onHandleModal: () => void
}
defineProps<Props>()
</script>
<style lang="scss" scoped>
.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  color: black;
  background-color: #cececeb5;
  .modal-body {
    background-color: aliceblue;
    padding: 70px;
    position: relative;
    width: 400px;
    gap: 5px;

    h2 {
      text-align: center;
    }
    .modal-close {
      position: absolute;
      top: 5px;
      right: 10px;
      cursor: pointer;
    }
  }
}
</style>
