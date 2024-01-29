<script setup lang="ts">
import { UserList } from '@/entities/User'
import ModalWindow from '@/shared/ui/ModalWindow.vue'
import { onMounted, ref } from 'vue'
import CustomButton from '../shared/ui/CustomButton.vue'
import { useUsersStore } from '@/app/stores/users'
import DetailedModal from '@/widgets/DetailedModal.vue'
import CustomInput from '@/shared/ui/CustomInput.vue'
const userStore = useUsersStore()
onMounted(async () => {
  await userStore.getUsers()
})
const isModalVisiable = ref(false)
const isModalDetailedVisiable = ref(false)
const onHandleModal = () => {
  isModalVisiable.value = !isModalVisiable.value
}
const onHandleDetailedModal = () => {
  isModalDetailedVisiable.value = !isModalDetailedVisiable.value
}
</script>
<template>
  <main>
    <ModalWindow v-model:show="isModalVisiable" :onHandleModal="onHandleModal" />
    <DetailedModal
      v-model:show="isModalDetailedVisiable"
      :on-handle-modal="onHandleDetailedModal"
    />
    <div>
      <CustomInput type="text" @input="userStore.useFilter" :placeholder="'Search by name'" />
      <CustomButton :onHandleBtn="onHandleModal">Add User</CustomButton>
    </div>
    <UserList :users="userStore.filter" :onHandleOpenDetailed="onHandleDetailedModal" />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  .modal-body {
    display: flex;
    flex-direction: column;
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
  div {
    display: flex;
    gap: 40px;
    .btn {
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        opacity: 0.5;
      }
    }
  }
}
</style>
