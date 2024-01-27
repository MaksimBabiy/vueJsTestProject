import type { IGetUsersTDO, IUser } from '@/entities/User/model/types/user'
import axios from 'axios'

export const getAllUsers = async () => {
  const data = await axios.get<IGetUsersTDO>(' https://reqres.in/api/users').then((responce) => {
    return responce.data
  })

  return data.data
}
