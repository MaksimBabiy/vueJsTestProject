export interface IUser {
  id: number
  email: string
  first_name: string
  last_name?: string
  avatar?: string
}
export interface IUserExtended extends IUser {
  phoneNumber?: string
  address?: string
}
export interface IGetUsersTDO {
  page: string
  per_page: string
  total: number
  total_pages: number
  data: IUser[]
  support: {
    url: string
    text: string
  }
}
