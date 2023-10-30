import { authenticatedInstance } from '../instance'
import type { EnrolledClasses } from '~/types'

export async function enrolled() {
  try {
    const result = await authenticatedInstance().get<EnrolledClasses>('/tution-classes/enrolled')
    if (result.status === 200)
      console.log(result.data)
    return result.data
  }
  catch (error) {
    console.log(error)
  }
}
