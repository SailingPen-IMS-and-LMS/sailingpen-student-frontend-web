export interface StudentProfile {
  student_id: string
  school: string
  parent_contact_no: string
  barcode: string | null
  user_id: string
  address: string
  admin: any
  avatar: string | null
  contact_no: string
  dob: string
  email: string
  f_name: string
  l_name: string
  nic: string
  user_type: string
  username: string
}

export interface TutorBriefInfo {
  subject: string
  tutor_avatar: string
  tutor_f_name: string
  tutor_id: string
  tutor_l_name: string
}

export type ListOfTutorBriefInfo = TutorBriefInfo[]
