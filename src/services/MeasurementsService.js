import axios from 'axios'
import {
  MEASUREMENT_LOAD_ERROR,
  MEASUREMENT_LOAD_START,
  MEASUREMENT_LOAD_SUCCESS,
} from '../actions/Actions'
import { measurementsGraphUrl } from '../utils/Urls'

const getMeasurementsForGraph = (dispatch, siloId, selectedPeriod) => {
  dispatch({ type: MEASUREMENT_LOAD_START })

  const url = `${measurementsGraphUrl}${siloId}/${selectedPeriod}`

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

export default getMeasurementsForGraph
