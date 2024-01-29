<template>
  <form @submit.prevent="handleAdd">
    <CustomInput v-model="formData.first_name" label="Name" type="text" />
    <span v-for="error in v$.first_name.$errors" :key="error.$uid"
      >{{ error.$property }} - {{ error.$message }}</span
    >
    <CustomInput v-model="formData.email" label="Email" />
    <span v-for="error in v$.email.$errors" :key="error.$uid"
      >{{ error.$property }} - {{ error.$message }}</span
    >
    <CustomButton type="submit">Add</CustomButton>
  </form>
</template>
<script setup lang="ts">
import { computed, reactive } from 'vue'
import CustomButton from './CustomButton.vue'
import { useUsersStore } from '@/app/stores/users'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, email } from '@vuelidate/validators'
import CustomInput from './CustomInput.vue'

const userStore = useUsersStore()
interface Props {
  onHandleModal: () => void
}
const props = defineProps<Props>()

const formData = reactive({
  first_name: '',
  email: '',
  id: 0
})
const rules = computed(() => {
  return {
    first_name: { required, minLength: minLength(3) },
    email: { required, email }
  }
})
const v$ = useVuelidate(rules, formData)
const handleAdd = async () => {
  const result = await v$.value.$validate()
  if (result) {
    formData.id = userStore.users[userStore.users.length - 1].id + 1
    userStore.addUserToList(formData)
    props.onHandleModal()
  }
}
</script>
<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  input {
    padding: 10px;
  }
  button {
    align-self: flex-end;
  }
  span {
    color: red;
  }
}
</style>
