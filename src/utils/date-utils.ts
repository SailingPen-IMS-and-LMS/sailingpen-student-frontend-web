import { format } from 'date-fns'

export type DayName = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'

const dayMap: Record<DayName, number> = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
}

export function getDaysInCurrentMonth(dayName: DayName) {
  const today = new Date()
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()
  const days: string[] = []

  for (let day = 1; day <= 31; day++) {
    const date = new Date(currentYear, currentMonth, day)
    if (date.getMonth() === currentMonth && date.getDay() === dayMap[dayName]) {
      // Day 6 corresponds to Saturday (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
      days.push(format(date, 'yyyy-MM-dd'))
    }
  }

  return days
}
