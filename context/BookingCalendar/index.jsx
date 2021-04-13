import { createContext, useReducer } from 'react'

import reducer, { initial, initState } from './reducer'

export const CalendarContext = createContext()

const Provider = ({ children }) => {
  const [calendarState, dispatch] = useReducer(reducer, initState, initial)

  return (
    <CalendarContext.Provider
      value={{
        calendarState,
        dispatch,
      }}
    >
      {children}
    </CalendarContext.Provider>
  )
}

export default Provider
