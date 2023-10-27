import { authenticatedInstance } from '../instance'

export async function enrollByStudent(studentId: string, classId: string) {
  try {
    const result = await authenticatedInstance().post('/tution-classes/enroll-by-student', {
      student_id: studentId,
      class_id: classId,
    })
    if (result.status === 201)
      return true
  }
  catch (error) {
    console.log(error)
    return false
  }
}
