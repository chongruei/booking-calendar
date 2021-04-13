// import Schedule from '@/container/BookingCalendar/Schedule'
import dynamic from 'next/dynamic'

import Provider from '@/context/BookingCalendar'
import useTranslate from '@/hooks/useTranslate'

import Header from './Header'

import styles from './BookingCalendar.module.scss'

const Schedule = dynamic(() => import('@/container/BookingCalendar/Schedule'), { ssr: false })

const BookingCalendar = () => {
  const t = useTranslate()
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t('available_time')}</h2>
      <Provider>
        <Header />
        <Schedule />
      </Provider>
    </div>
  )
}

export default BookingCalendar
