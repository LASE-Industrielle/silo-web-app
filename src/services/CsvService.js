import axios from 'axios'
import { csvExportUrl } from '../utils/Urls'

const getCsvExport = (siloId) => {

  const token = localStorage.getItem('token')
  const headers = {
    Authorization: 'Token ' + token,
  }

  axios({
    url: csvExportUrl + siloId,
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
