import { reactive } from 'vue'
import { defineStore } from 'pinia'
import type { IUserExtended } from '@/entities/User'

export const useCurrentUserStore = defineStore('currentUser', () => {
  const currentUser = reactive<IUserExtended>({
    id: NaN,
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
    phoneNumber: '',
    address: ''
  })

  const setCurrentUser = (user: IUserExtended) => {
    currentUser.id = user.id
    currentUser.email = user.email
    currentUser.first_name = user.first_name
    currentUser.last_name = user.last_name
    currentUser.avatar = user.avatar
    currentUser.address = user.address
    currentUser.phoneNumber = user.phoneNumber
  }

  return { setCurrentUser, currentUser }
})
