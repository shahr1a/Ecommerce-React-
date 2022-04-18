import { createAPIEndpoint, ENDPOINTS } from "../../api"
import {
  SUBSUBCATEGORY_SUCCESS,
  SUBSUBCATEGORY_FAILED,
} from "../constants/subsubcategoryConstants"

const fetch = () => async (dispatch) => {
  createAPIEndpoint(ENDPOINTS.SUBSUBCATEGORY)
    .fetchAll()
    .then((response) => {
      dispatch({
        type: SUBSUBCATEGORY_SUCCESS,
        payload: response.data,
      })
    })
    .catch((error) => {
      if (error.response.status === 200) {
        dispatch({
          type: SUBSUBCATEGORY_FAILED,
          payload: error.response.data,
        })
      } else if (error.response.status === 401) {
        dispatch({
          type: SUBSUBCATEGORY_FAILED,
          payload: "Login failed! Please check email and password properly ...",
        })
      }
    })
}

const exportDefault = { fetch }

export default exportDefault
