import { instance } from '../instance'
import type { RegisterDto } from '~/types'

export async function studentRegister(registerDto: RegisterDto) {
  try {
    const formData = new FormData()
    Object.entries(registerDto).forEach(([key, value]) => {
      formData.append(key, value)
    })
    const response = await instance.post('/auth/student-register', registerDto, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    if (response.status === 201)
      return true
  }
  catch (error) {
    console.log(error)
    return false
  }
}
