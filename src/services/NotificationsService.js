import axios from "axios";
import {
  NOTIFICATIONS_LOAD_START,
  NOTIFICATIONS_LOAD_SUCCESS,
  NOTIFICATIONS_LOAD_ERROR
} from "../actions/Actions";
import { notificationsUrl } from "../utils/Urls";

const getNotifications = dispatch => {
  dispatch({ type: NOTIFICATIONS_LOAD_START });
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: "Token " + token
  };
  axios
    .get(notificationsUrl, { headers })
    .then(response =>
      dispatch({
        type: NOTIFICATIONS_LOAD_SUCCESS,
        payload: response.data
      })
    )
    .catch(err => {
      dispatch({
        type: NOTIFICATIONS_LOAD_ERROR,
        error: err
      });
    });
};

export default getNotifications;
