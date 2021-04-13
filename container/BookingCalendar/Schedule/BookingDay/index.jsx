import useTranslate from '@/hooks/useTranslate'

import styles from './BookingDay.module.scss'

const BookingDay = ({ date, weekday, scheduleTimes = [] }) => {
  const t = useTranslate()

  // cross next week day
  const isDisabled = scheduleTimes.filter(st => st.available === true && st.date.getDate() === date).length === 0

  return (
    <div className={!isDisabled ? styles.container : `${styles.container} ${styles.disabled}`}>
      <span className={styles.title}>{t(`weekdays.${weekday}`)}</span>
      <span className={styles.title}>{date}</span>
      {scheduleTimes.map(st => {
        const { date: stDate, available } = st
        if (stDate.getDate() !== date) return null
        return (
          <span key={stDate} className={available ? `${styles.time} ${styles.time__available}` : styles.time}>
            {st.formatTime()}
          </span>
        )
      })}
    </div>
  )
}

export default BookingDay
