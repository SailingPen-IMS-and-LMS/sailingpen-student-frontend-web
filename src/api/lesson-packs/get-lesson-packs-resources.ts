import { authenticatedInstance } from '../instance'
import type { LessonPackResources } from '~/types/api-types/lesson-packs-types'

export async function getLessonPackResources(lessonPackID: string) {
  try {
    const response = await authenticatedInstance().get<LessonPackResources>(`/lesson-packs/available-to-buy/${lessonPackID}/resources`)
    if (response.status === 200)
      return response.data
    return undefined
  }
  catch (e) {
    console.log(e)
    return undefined
  }
}
