export interface RegisterDto {
  nic: string
  f_name: string
  l_name: string
  email: string
  password: string
  confirm_password: string
  dob: string
  address: string
  contact_no: string
  school: string
  parent_contact_no: string
  avatar: File | null
    terms: false
}

export interface LoginDto {
  username: string
  password: string
}

export interface LoginResponse {
  accessToken: string
  userType: string
}

export interface AuthRefreshResponse {
  accessToken: string
}
