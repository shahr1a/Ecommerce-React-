import { createAPIEndpoint, ENDPOINTS } from "../../api"
import {
  CATEGORY_SUCCESS,
  CATEGORY_FAILED,
} from "../constants/categoryConstants"

const fetch = () => async (dispatch) => {
  createAPIEndpoint(ENDPOINTS.CATEGORY)
    .fetchAll()
    .then((response) => {
      dispatch({
        type: CATEGORY_SUCCESS,
        payload: response.data,
      })
    })
    .catch((error) => {
      if (error.response.status === 200) {
        dispatch({
          type: CATEGORY_FAILED,
          payload: error.response.data,
        })
      } else if (error.response.status === 401) {
        dispatch({
          type: CATEGORY_FAILED,
          payload: "Login failed! Please check email and password properly ...",
        })
      }
    })
}

const exportDefault = { fetch }

export default exportDefault
