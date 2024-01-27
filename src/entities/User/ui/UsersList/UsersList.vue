<script lang="ts" setup>
import { useUsersStore } from '@/app/stores/users'

import { useCurrentUserStore } from '@/app/stores/currentUser'
import type { IUser } from '../../model/types/user'
import Loader from '@/shared/ui/Loader.vue'

interface Props {
  users: IUser[]
  onHandleOpenDetailed: () => void
}
const usersStore = useUsersStore()
const props = defineProps<Props>()
const currentUser = useCurrentUserStore()

const handleOpen = (user: IUser) => {
  currentUser.setCurrentUser(user)
  props.onHandleOpenDetailed()
}
</script>
<template>
  <div class="notFound" v-show="users.length === 0"><Loader /> <span>Not Found</span></div>
  <ul>
    <li v-for="user in users" :key="user.id" class="userItem">
      <img :src="user.avatar" alt="avatar" @click="() => handleOpen(user)" />
      <div>
        <p>
          <span>{{ user.first_name }}</span> <span>{{ user.last_name }}</span>
        </p>
        <span>{{ user.email }}</span>
      </div>
      <span @click="() => usersStore.removeUserFromList(user.id as number)" class="removeUser"
        >🗙</span
      >
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.notFound {
  display: flex;
  gap: 10px;
  align-items: center;
}
ul {
  display: grid;
  min-height: 580px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  li {
    cursor: pointer;
  }
  .userItem {
    list-style: none;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    .removeUser {
      cursor: pointer;
    }
    div {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        font-weight: bold;
      }
    }
  }
}
</style>
