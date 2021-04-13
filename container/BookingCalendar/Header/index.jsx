import { useContext } from 'react'

import { CalendarContext } from '@/context/BookingCalendar'
import useTranslate from '@/hooks/useTranslate'
import { padding2Zero } from '@/utils/number/number'

import ButtonGroup from '../ButtonGroup'

import styles from './Header.module.scss'

/**
 * @param {number} year
 * @param {number} month
 * @param {Date} firstWeekday
 * @param {Date} lastWeekDay
 * @example 2021/04/11 ~ 17
 */
const formatDateRange = (year, month, firstWeekday, lastWeekDay) =>
  `${year}/${padding2Zero(month)}/${padding2Zero(firstWeekday.getDate())} ~ 
  ${padding2Zero(lastWeekDay.getDate())}`

const Header = () => {
  const t = useTranslate()
  const { calendarState } = useContext(CalendarContext)
  const { year, month, weekdays } = calendarState

  return (
    <div className={styles.container}>
      <div className={styles.date__selector}>
        <ButtonGroup />
        <span className={styles.date__selected}>{formatDateRange(year, month, weekdays[0], weekdays[6])}</span>
      </div>
      <span className={styles.timezone}>{t('timezone')}</span>
    </div>
  )
}
export default Header
