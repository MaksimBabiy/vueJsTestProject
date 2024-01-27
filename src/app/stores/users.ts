import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IUser, IUserExtended } from '@/entities/User'
import { addUser, getAllUsers, removeUser } from '@/features'
import { computed } from 'vue'
export const useUsersStore = defineStore('users', () => {
  const users = ref<IUserExtended[]>([])
  const filterValue = ref('')

  const addUserToList = async (user: IUser) => {
    await addUser(user)
    users.value.push(user)
  }
  const removeUserFromList = async (id: number) => {
    await removeUser(id)
    users.value = users.value.filter((user) => user.id !== id)
  }
  const editUser = (user: IUserExtended) => {
    users.value.map((item) => {
      if (item.id == user.id) {
        item.first_name = user.first_name
        item.last_name = user.last_name
        item.email = user.email
        item.avatar = user.avatar
        item.address = user.address
        item.phoneNumber = user.phoneNumber
      }
    })
  }

  const filter = computed(() => {
    return filterValue.value.trim() === ''
      ? users.value
      : users.value.filter(
          (item) =>
            item.first_name.toLowerCase().includes(filterValue.value.toLowerCase()) ||
            item.last_name?.toLowerCase().includes(filterValue.value.toLowerCase())
        )
  })

  const useFilter = (e: Event) => {
    const value = (e.target as HTMLInputElement).value
    filterValue.value = value
    console.log(filterValue.value)
  }
  const getUsers = async () => {
    try {
      users.value = await getAllUsers()
    } catch (err) {
      console.log(err)
      users.value = []
    }
  }

  return { removeUserFromList, users, getUsers, useFilter, addUserToList, filter, editUser }
})
