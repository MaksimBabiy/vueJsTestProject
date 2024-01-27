<template>
  <button @click="onHandleBtn"><slot></slot></button>
</template>
<script setup lang="ts">
interface Props {
  onHandleBtn?: () => void
}
defineProps<Props>()
</script>
<style lang="scss" scoped>
button {
  padding: 10px 15px;
  background-color: rgb(117, 244, 149);
  outline: none;
  border: 1px solid;
  border-radius: 4px;
  min-width: 80px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
}
</style>
