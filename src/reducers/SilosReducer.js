import {
  SILOS_LOAD_START,
  SILOS_LOAD_SUCCESS,
  SILOS_LOAD_ERROR
} from "../actions/Actions";

const silosReducer = (state, action) => {
  switch (action.type) {
    case SILOS_LOAD_START:
      return {
        ...state,
        loading: true
      };
    case SILOS_LOAD_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case SILOS_LOAD_ERROR:
      return {
        ...state,
        errorMessage: "failed",
        loading: false
      };
    default:
      return state;
  }
};
export { silosReducer };
