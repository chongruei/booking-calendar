import apiClient from '@/apiClient'

export const fetchScheduleUrl = 'schedule'

export const fetchSchedule = startedDate => apiClient(`${fetchScheduleUrl}?started_at=${startedDate}`)
