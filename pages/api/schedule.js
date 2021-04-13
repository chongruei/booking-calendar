export default (req, res) => {
  // const { startDate } = req.query

  res.statusCode = 200
  res.json({
    available: [
      { start: '2021-04-14T00:00:00Z', end: '2021-04-14T03:00:00Z' },
      { start: '2021-04-14T23:00:00Z', end: '2021-04-15T00:00:00Z' },
      { start: '2021-04-15T01:00:00Z', end: '2021-04-15T01:30:00Z' },
      { start: '2021-04-15T02:30:00Z', end: '2021-04-15T03:00:00Z' },
      { start: '2021-04-16T01:00:00Z', end: '2021-04-16T02:00:00Z' },
      { start: '2021-04-16T13:00:00Z', end: '2021-04-16T15:00:00Z' },
      { start: '2021-04-16T23:00:00Z', end: '2021-04-17T03:00:00Z' },
      { start: '2021-04-17T13:00:00Z', end: '2021-04-17T16:30:00Z' },
    ],
    booked: [
      { start: '2021-04-13T16:30:00Z', end: '2021-04-13T17:00:00Z' },
      { start: '2021-04-14T13:00:00Z', end: '2021-04-14T15:00:00Z' },
      { start: '2021-04-15T00:00:00Z', end: '2021-04-15T01:00:00Z' },
      { start: '2021-04-15T01:30:00Z', end: '2021-04-15T02:30:00Z' },
      { start: '2021-04-15T13:00:00Z', end: '2021-04-15T16:00:00Z' },
      { start: '2021-04-16T00:00:00Z', end: '2021-04-16T01:00:00Z' },
      { start: '2021-04-16T02:00:00Z', end: '2021-04-16T03:00:00Z' },
      { start: '2021-04-16T15:00:00Z', end: '2021-04-16T17:00:00Z' },
      { start: '2021-04-17T16:30:00Z', end: '2021-04-17T17:00:00Z' },
    ],
  })
}
