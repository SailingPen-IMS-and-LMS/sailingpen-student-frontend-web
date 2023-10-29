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
export interface LessonPackDetails extends LessonPack {
  resources: {
    name: string
    id: number
    thumbnail_url: null | string
    type: ResourceType
  }[]

}

export enum ResourceType {
  VIDEO = 'video',
  IMAGE = 'image',
  DOCUMENT = 'document',
}

// [
//     {
//         "id": "lp_97764003-9fd3-45c4-be39-bd20e4081448",
//         "name": "Trigonmetry",
//         "description": "A lesson pack containing lessons of Trigonmetry",
//         "price": "2000",
//         "created_at": "2023-10-26T00:00:00.000Z",
//         "updated_at": "1970-01-01T00:00:00.000Z",
//         "tutor_id": "tutor_d05955b8-83f1-4292-ba09-39ac1e098514"
//     }
// ]

export type BoughtLessonPacksResponse = {
  id: string
  name: string
  description: string
  price: string
  created_at: string
  updated_at: string
  tutor_id: string
  tutor: {
    user: {
      f_name: string
      l_name: string
    }
  }
}[]

export interface LessonPackResources {
  id: string
  name: string
  description: string
  price: string
  created_at: string
  updated_at: string
  tutor_id: string
  resources: {
    id: number
    name: string
    url: string
    thumbnail_url: null | string
    type: ResourceType
    folder_id: number
  }[]

  tutor: {
    user: {
      f_name: string
      l_name: string
      avatar: string
    }

    subject: {
      subject_name: string
    }
  }
}
