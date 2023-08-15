import { authenticatedInstance } from '../instance'
import type { EnrolledClasses } from '~/types'

export async function enrolled() {
  try {
    const result = await authenticatedInstance().get<EnrolledClasses>('/tution-classes/enrolled')
    if (result.status === 200)
      return result.data
  }
  catch (error) {
    console.log(error)
  }
}
