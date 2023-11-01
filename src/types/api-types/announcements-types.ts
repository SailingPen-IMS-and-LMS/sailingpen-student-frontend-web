export interface GetAnnouncements {
  id: number
  title: string
  content: string
  created_at: string
  tutionClass: {
    class_name: string
  }
}
