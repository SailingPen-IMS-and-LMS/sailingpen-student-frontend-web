import { instance } from '../instance'
import type { AuthRefreshResponse } from '~/types'

export async function refresh() {
  try {
    const result = await instance.get<AuthRefreshResponse>('/auth/refresh')
    if (result.status === 200)
      localStorage.setItem('accessToken', result.data.accessToken)
  }
  catch (error) {
    console.log(error)
  }
}
