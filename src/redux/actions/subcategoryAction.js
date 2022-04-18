import { createAPIEndpoint, ENDPOINTS } from "../../api"
import {
  SUBCATEGORY_SUCCESS,
  SUBCATEGORY_FAILED,
} from "../constants/subcategoryConstants"

const fetch = () => async (dispatch) => {
  createAPIEndpoint(ENDPOINTS.SUBCATEGORY)
    .fetchAll()
    .then((response) => {
      dispatch({
        type: SUBCATEGORY_SUCCESS,
        payload: response.data,
      })
    })
    .catch((error) => {
      if (error.response.status === 200) {
        dispatch({
          type: SUBCATEGORY_FAILED,
          payload: error.response.data,
        })
      } else if (error.response.status === 401) {
        dispatch({
          type: SUBCATEGORY_FAILED,
          payload: "Login failed! Please check email and password properly ...",
        })
      }
    })
}

const exportDefault = { fetch }

export default exportDefault
