import { authenticatedInstance } from '../instance'
import type { NotEnrolledClasses } from '~/types'

export async function notEnrolled(tutorId: string) {
  try {
    const result = await authenticatedInstance().get<NotEnrolledClasses>(`/tution-classes/not-enrolled?tutor_id=${tutorId}`)
    if (result.status === 200)
      return result.data
  }
  catch (error) {
    console.log(error)
  }
}
