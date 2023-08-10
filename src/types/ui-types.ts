export interface SidebarItem {
  to: string
  text: string
}

export type SidebarItems = SidebarItem[]

export interface EnrolledClassDetails {
  name: string
  subject: string
  image: string
  id: number
}

export interface MyLessonPacksDetails {
  name: string
  time: string
  image: string
  id: number

}
