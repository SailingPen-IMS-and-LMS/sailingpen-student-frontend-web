import type { ResourceType } from './lesson-packs-types'
import type { DayName } from '~/utils'

export interface WeeklySession {
  id: string
  date: string
  attachments: {
    id: number
    type: ResourceType
    name: string
    url: string
    thumbnail_url: string | null
  }[
  ]
  video_url: string
  description: string
  video_thumbnail_url: string
  tution_class: {
    schedule: {
      day: DayName
      time: string
    }
  }
}

export type WeeklySessions = WeeklySession[]
