import axios from 'axios'
import {
  MEASUREMENT_LOAD_ERROR,
  MEASUREMENT_LOAD_START,
  MEASUREMENT_LOAD_SUCCESS,
} from '../actions/Actions'
import { measurementsGraphUrl } from '../utils/Urls'

const getMeasurementsForGraph = (dispatch, siloId, selectedPeriod) => {
  const url = `${measurementsGraphUrl}${siloId}/${selectedPeriod}`

  fetchGraphData(dispatch, url)

}

const getMeasurementsForGraphWithTimestamp = (
  dispatch, siloId, startDate, startTime, endDate, endTime) => {
  const startDateIso = startDate.toISOString().split('T')[0]
  const startTimeIso = startTime.toISOString().split('T')[1]

  const endDateIso = endDate.toISOString().split('T')[0]
  const endTimeIso = endTime.toISOString().split('T')[1]

  const url = `${measurementsGraphUrl}${siloId}/${startDateIso}T${startTimeIso}/${endDateIso}T${endTimeIso}`
  fetchGraphData(dispatch, url)

}

const fetchGraphData = (dispatch, url) => {
  dispatch({ type: MEASUREMENT_LOAD_START })

  const token = localStorage.getItem('token')
  const headers = {
    Authorization: 'Token ' + token,
  }

  axios.get(url, { headers }).then(response => dispatch(
    {
      type: MEASUREMENT_LOAD_SUCCESS,
      payload: response.data,
    })).catch(err => dispatch({
    type: MEASUREMENT_LOAD_ERROR,
    error: err,
  }))
}

export { getMeasurementsForGraph, getMeasurementsForGraphWithTimestamp }
