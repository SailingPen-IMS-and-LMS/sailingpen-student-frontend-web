import { authenticatedInstance } from '../../instance'
import type { WeeklySessions } from '~/types'

export async function getForCurrentMonth(tutionClassId: string): Promise<WeeklySessions> {
  try {
    const result = await authenticatedInstance().get<WeeklySessions>(`/tution-classes/weekly-sessions/for-student?tution_class_id=${tutionClassId}`)
    if (result.status === 200) {
      return result.data.map((ws) => {
        return {
          ...ws,
          date: ws.date.split('T')[0],
        }
      })
    }

    return []
  }
  catch (error) {
    console.log(error)
    return []
  }
}
