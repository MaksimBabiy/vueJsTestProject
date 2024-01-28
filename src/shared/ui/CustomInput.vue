<template>
  <div class="input-wrap">
    <label for="">{{ label }}</label>
    <input
      type="text"
      :value="modelValue"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target?.value)"
    />
  </div>
</template>
<script lang="ts" setup>
interface Props {
  label?: string
  modelValue?: string | undefined
}
defineProps<Props>()
</script>
<style lang="scss">
.input-wrap {
  display: flex;
  flex-direction: column;
  input {
    padding: 8px 12px;
    font-size: 16px;
  }
}
</style>
