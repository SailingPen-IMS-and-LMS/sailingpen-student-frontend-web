import { instance } from '../instance'
import type { LoginDto, LoginResponse } from '~/types'

export async function studentLogin(loginDto: LoginDto) {
  try {
    const result = await instance.post<LoginResponse>('/auth/student-login', loginDto)
    if (result.status === 200)
      localStorage.setItem('accessToken', result.data.accessToken)
  }
  catch (error) {
    console.log(error)
    throw error
  }
}
