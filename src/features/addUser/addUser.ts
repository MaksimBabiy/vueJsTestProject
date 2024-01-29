import type { IUser } from '@/entities/User'
import axios from 'axios'
export const addUser = async (user: IUser) => {
  try {
    const data = await axios.post<IUser>('https://reqres.in/api/users', user).then((responce) => {
      return responce.data
    })
    return data
  } catch (error) {
    console.log(error)
  }
}
