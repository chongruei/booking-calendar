import { useContext } from 'react'

import { CalendarContext } from '@/context/BookingCalendar'
import useSchedule from '@/swr/schedule/useSchedule'
import { FIRST_WEEK_DAYS_INDEX, HALF_HOUR } from '@/utils/date/constants'
import { padding2Zero } from '@/utils/number/number'

import BookingDay from './BookingDay'

import styles from './Schedule.module.scss'

class ScheduleTime {
  constructor(date, available) {
    this.date = date
    this.weekday = date.getDay()
    this.available = available
  }

  formatTime() {
    const d = this.date
    return `${padding2Zero(d.getHours())}:${padding2Zero(d.getMinutes())}`
  }
}

const coverToScheduleTime = (start, end, available) => {
  const startDate = new Date(start)
  const endDate = new Date(end)

  const duration = (endDate - startDate) / HALF_HOUR
  const avaDates = []
  for (let i = 1; i < duration; i += 1) {
    avaDates.push(new ScheduleTime(new Date(startDate.getTime() + i * HALF_HOUR), available))
  }

  return [avaDates]
}

const Schedule = () => {
  const { calendarState } = useContext(CalendarContext)
  const { weekdays } = calendarState
  const firstDay = weekdays[FIRST_WEEK_DAYS_INDEX]

  const { schedule = {}, isLoading } = useSchedule(firstDay.getTime())
  const { available = [], booked = [] } = schedule

  const availableDates = available.map(({ start, end }) => coverToScheduleTime(start, end, true)).flat(2)
  const bookedDates = booked.map(({ start, end }) => coverToScheduleTime(start, end, false)).flat(2)
  const allScheduleTime = availableDates.concat(bookedDates).sort((d1, d2) => d1.date - d2.date)

  // skeleton
  if (isLoading) return <div>Loading...</div>

  return (
    <div className={styles.container}>
      {weekdays.map(day => {
        const date = day.getDate()
        const weekday = day.getDay()
        return (
          <BookingDay
            key={day}
            date={date}
            weekday={weekday}
            scheduleTimes={allScheduleTime.filter(st => st.weekday === weekday)}
          />
        )
      })}
    </div>
  )
}

export default Schedule
