import { authenticatedInstance } from '../instance'
import type { BoughtLessonPacksResponse } from '~/types/api-types/lesson-packs-types'

export async function getMyLessonPacks() {
  try {
    const response = await authenticatedInstance().get<BoughtLessonPacksResponse>('/lesson-packs/bought')
    if (response.status === 200)
      return response.data
    return [] as BoughtLessonPacksResponse
  }
  catch (e) {
    console.log(e)
    return [] as BoughtLessonPacksResponse
  }
}
