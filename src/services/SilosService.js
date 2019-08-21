import axios from "axios";
import {
  SILOS_LOAD_ERROR,
  SILOS_LOAD_START,
  SILOS_LOAD_SUCCESS
} from "../actions/Actions";

const getSilos = dispatch => {
  dispatch({ type: SILOS_LOAD_START });
  const token = localStorage.getItem('token');
  const headers = {
    Authorization: "Token " + token,
  };
  axios
    .get("https://silo-be.herokuapp.com/silo/", { headers })
    .then(response =>
      dispatch({
        type: SILOS_LOAD_SUCCESS,
        payload: response.data
      })
    )
    .catch(err => {
      dispatch({
        type: SILOS_LOAD_ERROR,
        error: err
      });
    });
};

export default getSilos;
