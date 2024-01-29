import axios from 'axios'

export const removeUser = async (id: number) => {
  try {
    const data = await axios.delete(`https://reqres.in/api/users/${id}`).then((responce) => {
      return responce.data
    })

    return data.data
  } catch (error) {
    console.log(error)
  }
}
