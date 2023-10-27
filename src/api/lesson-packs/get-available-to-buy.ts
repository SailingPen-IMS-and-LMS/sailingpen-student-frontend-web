import { authenticatedInstance } from '../instance'
import type { AvailableToBuyLessonPacksResponse } from '~/types/api-types/lesson-packs-types'

export async function getAvailableToBuy() {
  try {
    const response = await authenticatedInstance().get<AvailableToBuyLessonPacksResponse>('/lesson-packs/available-to-buy')
    if (response.status === 200)
      return response.data
    return [] as AvailableToBuyLessonPacksResponse
  }
  catch (e) {
    console.log(e)
    return [] as AvailableToBuyLessonPacksResponse
  }
}
