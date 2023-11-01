import { authenticatedInstance } from '../instance'
import type { GetAnnouncements } from '~/types/api-types/announcements-types'

export async function getAnnouncements(classID: string) {
  try {
    const response = await authenticatedInstance().get<GetAnnouncements>(`/announcements/${classID}`)

    if (response.status === 200)
      return response.data
    return undefined
  }
  catch (e) {
    console.log(e)
    return undefined
  }
}
