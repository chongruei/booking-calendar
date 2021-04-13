import { useContext } from 'react'

import Arrow, { Direction } from '@/components/Arrow'
import Button from '@/components/Button'
import { CalendarContext } from '@/context/BookingCalendar'
import actionTypes from '@/context/BookingCalendar/actionType'
import { FIRST_WEEK_DAYS_INDEX } from '@/utils/date/constants'

import styles from './ButtonGroup.module.scss'

const ButtonGroup = () => {
  const { calendarState, dispatch } = useContext(CalendarContext)
  const { today, weekdays } = calendarState
  const firstWeekday = weekdays[FIRST_WEEK_DAYS_INDEX]

  const handleNextWeek = () => {
    dispatch({ type: actionTypes.NEXT_WEEK })
  }

  const handlePrevWeek = () => {
    dispatch({ type: actionTypes.PREV_WEEK })
  }

  return (
    <div className={styles.container}>
      <Button onClick={handlePrevWeek} disabled={today > firstWeekday}>
        <Arrow direction={Direction.LEFT} />
      </Button>
      <Button onClick={handleNextWeek}>
        <Arrow direction={Direction.RIGHT} />
      </Button>
    </div>
  )
}
export default ButtonGroup
