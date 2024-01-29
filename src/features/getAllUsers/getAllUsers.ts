import type { IGetUsersTDO } from '@/entities/User/model/types/user'
import axios from 'axios'

export const getAllUsers = async () => {
  try {
    const data = await axios.get<IGetUsersTDO>(' https://reqres.in/api/users').then((responce) => {
      return responce.data
    })
    return data.data
  } catch (error) {
    console.log(error)
  }
}
