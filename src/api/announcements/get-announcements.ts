import { authenticatedInstance } from '../instance'
import type { Announcements } from '~/types/api-types/announcements-types'

export async function getAnnouncements(classID: string) {
  try {
    const response = await authenticatedInstance().get<Announcements>(`/announcements/class-announcements/${classID}`)

    if (response.status === 200)
      return response.data
    return []
  }
  catch (e) {
    console.log(e)
    return []
  }
}
