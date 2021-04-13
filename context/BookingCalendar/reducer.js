import { FIRST_WEEK_DAYS_INDEX, MONTH_INDEX, WEEK_DAYS } from '@/utils/date/constants'

import actionTypes from './actionType'

export const controlDate = (newDate = new Date()) => {
  const date = new Date(newDate)
  const month = date.getMonth() + MONTH_INDEX // 0 ~ 11
  const year = date.getFullYear()

  const currDate = new Date(date)
  const weekdays = []
  const firstDay = currDate.getDate() - currDate.getDay()
  for (let i = firstDay; i < firstDay + WEEK_DAYS; i += 1) {
    weekdays.push(new Date(currDate.setDate(i)))
  }

  return {
    month,
    year,
    weekdays,
  }
}

export const initial = () => ({
  today: new Date(),
  ...controlDate(),
})

export const initState = {
  today: null,
  month: null,
  year: null,
  weekdays: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.NEXT_WEEK: {
      const { weekdays } = state
      const firstWeekDay = weekdays[FIRST_WEEK_DAYS_INDEX]
      return {
        ...state,
        ...controlDate(firstWeekDay.setDate(firstWeekDay.getDate() + WEEK_DAYS)),
      }
    }
    case actionTypes.PREV_WEEK: {
      const { weekdays } = state
      const firstWeekDay = weekdays[FIRST_WEEK_DAYS_INDEX]
      return {
        ...state,
        ...controlDate(firstWeekDay.setDate(firstWeekDay.getDate() - WEEK_DAYS)),
      }
    }
    default:
      return state
  }
}

export default reducer
