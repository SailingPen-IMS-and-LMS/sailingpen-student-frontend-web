export interface LessonPack {
  created_at: string
  description: string
  id: string
  name: string
  price: string
  tutor_id: string
  updated_at: string
  tutor: {
    user: {
      f_name: string
      l_name: string
    }
  }
}

export type AvailableToBuyLessonPacksResponse = LessonPack[]
