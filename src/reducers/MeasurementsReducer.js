import {
  MEASUREMENT_LOAD_ERROR,
  MEASUREMENT_LOAD_START,
  MEASUREMENT_LOAD_SUCCESS,
} from '../actions/Actions'

const measurementsReducer = (state, action) => {
  switch (action.type) {
    case MEASUREMENT_LOAD_START:
      return {
        ...state,
        loading: true,
      }
    case MEASUREMENT_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case MEASUREMENT_LOAD_ERROR:
      return {
        ...state,
        errorMessage: 'failed',
        loading: false,
      }
    default:
      return state

  }
}

export { measurementsReducer }
