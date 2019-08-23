import axios from 'axios'
import { csvExportUrl, timestampUrlSuffix } from '../utils/Urls'
import getIsoStringsFromDates from './DateService'

const getCsvExport = (siloId, startDate, startTime, endDate, endTime) => {

  const [startDateIso, startTimeIso, endDateIso, endTimeIso] = getIsoStringsFromDates(
    startDate, startTime, endDate, endTime)

  const url = `${csvExportUrl}${siloId}/${timestampUrlSuffix(startDateIso,
    startTimeIso, endDateIso, endTimeIso)}`

  const token = localStorage.getItem('token')
  const headers = {
    Authorization: 'Token ' + token,
  }

  axios({
    url: url,
    method: 'GET',
    responseType: 'blob',
    headers,
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download',
      `measurements_${new Date().toLocaleString().
        replace(', ', '_')}__${siloId}.csv`)
    document.body.appendChild(link)
    link.click()
    link.remove()
  })
}

export default getCsvExport
