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
    //obj array call attachments and it has id and link
    attachments: {id: number, link: string, text:string}[]
}

export interface AnnouncementCard{
    id: number
    title: string
    description: string
    date_time: string
    is_pinned: boolean
}

export interface MyLessonPacksDetails {
  name: string
  time: string
  image: string
  id: number

}

export interface LessonPacks {
  [key: number | string]: {
    tutorName: string
    className: string
    lessonPacks: MyLessonPacksDetails[]
  }
}

export interface AttachmentDetails {
  attachmentName: string
  tutorialNumber: number
  image: string
}

export interface VideoQuestionDetails {
  userProfile: string
  studentName: string
  time: string
  question: string

}
