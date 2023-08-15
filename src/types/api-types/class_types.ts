export interface EnrolledClass {
  class_id: string
  class_name: string
  tutor_id: string
  tutor_f_name: string
  tutor_l_name: string
  tutor_avatar: string
}

export type EnrolledClasses = EnrolledClass[]

export interface NotEnrolledClass {
  class_description: string
  class_id: string
  class_name: string
  schedule: null | Array<{ day: string; from_time: string; to_time: string }>
  subject_id: string
  tutor_id: string
  admission_fee: number | string
  monthly_fee: number | string
}

export type NotEnrolledClasses = NotEnrolledClass[]
