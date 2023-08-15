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
