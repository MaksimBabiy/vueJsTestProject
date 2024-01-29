<template>
  <div class="modal-container" v-if="show" @click="$emit('update:show', false)">
    <div class="modal-body" @click.stop>
      <span class="modal-close" @click="$emit('update:show', false)">🗙</span>
      <h2>Add the User</h2>
      <Form :onHandleModal="onHandleModal" />
    </div>
  </div>
</template>
<script setup lang="ts">
import Form from './Form.vue'
interface Props {
  onHandleModal: () => void
  show: boolean
}
defineProps<Props>()
</script>
<style lang="scss" scoped>
.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
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
