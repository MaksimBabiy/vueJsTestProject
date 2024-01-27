<template>
  <div class="modal-container">
    <div class="modal-body">
      <span class="modal-close" @click="onHandleModal">🗙</span>
      <h2>Detailed Info</h2>
      <div class="userInfoContainer">
        <div class="userInfoLeft">
          <img :src="currentUser.currentUser.avatar" alt="" />
          <div class="userFullName">
            <span>{{ currentUser.currentUser.first_name }}</span>
            <span>{{ currentUser.currentUser.last_name }}</span>
          </div>
          <span>Email: {{ currentUser.currentUser.email }}</span>
        </div>
        <div class="edit">
          <CustomInput
            label="Phone Number"
            v-model="currentUser.currentUser.phoneNumber"
            v-bind:disabled="isEdit"
          />
          <CustomInput
            label="Address"
            v-model="currentUser.currentUser.address"
            v-bind:disabled="isEdit"
          />
          <CustomButton @click="onHandleEdit">{{ isEdit ? 'Edit' : 'Save' }}</CustomButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCurrentUserStore } from '@/app/stores/currentUser'
import { useUsersStore } from '@/app/stores/users'
import CustomButton from '@/shared/ui/CustomButton.vue'
import CustomInput from '@/shared/ui/CustomInput.vue'
import { ref } from 'vue'

const isEdit = ref(true)
const userStore = useUsersStore()
const currentUser = useCurrentUserStore()

const onHandleEdit = () => {
  if (isEdit.value == false) {
    console.log('save')
    userStore.editUser(currentUser.currentUser)
  }
  isEdit.value = !isEdit.value
}
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
    padding: 70px 30px;
    position: relative;

    gap: 5px;
    .userInfoContainer {
      display: flex;
      gap: 10px;
      .edit {
        display: flex;
        flex-direction: column;
        gap: 10px;
        button {
          align-self: self-end;
        }
      }
      .userInfoLeft {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    .userFullName {
      display: flex;
      gap: 5px;
    }
    h2 {
      text-align: center;
      margin-bottom: 20px;
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
