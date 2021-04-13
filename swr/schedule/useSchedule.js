import { useEffect } from 'react'
import useSWR, { cache } from 'swr'

import { fetchSchedule, fetchScheduleUrl } from '@/services/schedule'

/**
 *  @data {
    "available":[
      {
        "start":"2020-07-17T10:30:00Z",
        "end":"2020-07-17T11:00:00Z"
      },
      {
        "start":"2020-07-17T13:00:00Z",
        "end":"2020-07-17T14:00:00Z"
      },
      {
        "start":"2020-07-18T05:30:00Z",
        "end":"2020-07-18T07:00:00Z"
      }
    ],
    "booked":[
      {
        "start":"2020-07-17T11:00:00Z",
        "end":"2020-07-17T13:00:00Z"
      },
      {
        "start":"2020-07-17T14:00:00Z",
        "end":"2020-07-17T15:00:00Z"
      },
      {
        "start":"2020-07-18T07:00:00Z",
        "end":"2020-07-18T08:00:00Z"
      },
      {
        "start":"2020-07-18T11:30:00Z",
        "end":"2020-07-18T13:00:00Z"
      }
    ]
  }
 * */

const useSchedule = startDate => {
  const { data, error } = useSWR([startDate, fetchScheduleUrl], fetchSchedule)

  useEffect(() => () => cache.clear(), [])

  return {
    schedule: data,
    isLoading: !error && !data,
    error,
  }
}

export default useSchedule
