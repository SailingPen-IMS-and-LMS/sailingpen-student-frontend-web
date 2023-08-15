import { authenticatedInstance } from '../../instance'
import type { ListOfTutorBriefInfo } from '~/types'

export async function getListForStudents() {
  try {
    const result = await authenticatedInstance().get<ListOfTutorBriefInfo>('/users/tutors/get-list-for-students')
    if (result.status === 200)
      return result.data
  }
  catch (error) {
    console.log(error)
    return null
  }
}
