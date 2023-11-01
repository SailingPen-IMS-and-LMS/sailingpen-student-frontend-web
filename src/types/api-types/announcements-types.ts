export interface Announcement {
  id: number
  title: string
  content: string
  created_at: string
  tutionClass: {
    class_name: string
  }
}

export type Announcements = Announcement[]
