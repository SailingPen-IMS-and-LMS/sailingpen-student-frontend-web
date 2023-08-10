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

export interface ResourceInfoCard{
    id: number
    title: string
    image: string
    description: string
    date: string
    // attachments: string[]
}
