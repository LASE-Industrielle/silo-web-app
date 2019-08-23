const getIsoStringsFromDates = (startDate, startTime, endDate, endTime) => {

  const startDateIso = startDate.toISOString().split('T')[0]
  const startTimeIso = startTime.toISOString().split('T')[1]
  const endDateIso = endDate.toISOString().split('T')[0]
  const endTimeIso = endTime.toISOString().split('T')[1]

  return [startDateIso, startTimeIso, endDateIso, endTimeIso]

}

export default getIsoStringsFromDates
