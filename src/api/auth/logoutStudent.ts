import { authenticatedInstance } from '../instance'

export async function logoutStudent() {
  try {
    const result = await authenticatedInstance().post('/auth/student-logout')
    if (result.status === 200) {
      localStorage.setItem('accessToken', '')
      return true
    }
  }
  catch (error) {
    console.log(error)
    return false
  }
}
