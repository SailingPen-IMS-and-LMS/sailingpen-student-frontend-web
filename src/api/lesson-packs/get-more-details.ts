import { authenticatedInstance } from '../instance'
import type { LessonPackDetails } from '~/types/api-types/lesson-packs-types'

export async function getMoreDetails(lessonPackID: string) {
  try {
    const response = await authenticatedInstance().get<LessonPackDetails>(`/lesson-packs/available-to-buy/${lessonPackID}`)
    if (response.status === 200)
      return response.data
    return undefined
  }
  catch (e) {
    console.log(e)
    return undefined
  }
}
