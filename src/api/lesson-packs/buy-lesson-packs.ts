import { authenticatedInstance } from '../instance'

export async function buyLessonPacks(lessonPackId: string) {
  try {
    const response = await authenticatedInstance().post(`/lesson-packs/buy?lesson_pack_id=${lessonPackId}`)
    if (response.status === 200)
      return true
    return false
  }
  catch (e) {
    console.log(e)
    return false
  }
}
