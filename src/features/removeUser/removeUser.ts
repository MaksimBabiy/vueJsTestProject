import type { IGetUsersTDO, IUser } from '@/entities/User/model/types/user'
import axios from 'axios'

export const removeUser = async (id: number) => {
  const data = await axios.delete(`https://reqres.in/api/users/${id}`).then((responce) => {
    return responce.data
  })

  return data.data
}
