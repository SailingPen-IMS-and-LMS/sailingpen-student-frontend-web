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

export interface OtherVideosDetails {
  image: string
  videoName: string
  time: string
  date: string
}

export interface BrowseLessonPacksDetails {
  image: string
  name: string
  month: string
  price: string
}

export interface FlashcardDetails {
  image: string
  name: string
  description: string
}
