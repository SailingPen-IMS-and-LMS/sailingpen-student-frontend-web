import { authenticatedInstance } from '../../instance'
import type { StudentProfile } from '../../../types'

export async function getProfile() {
  try {
    const result = await authenticatedInstance().get<StudentProfile>('/users/students/get-profile')
    if (result.status === 200)
      console.log(result.data)
  }
  catch (error) {
    console.log(error)
  }
}
