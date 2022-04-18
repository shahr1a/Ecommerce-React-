import { createAPIEndpoint, ENDPOINTS } from "../../api"
import { BRAND_SUCCESS, BRAND_FAILED } from "../constants/brandConstants"

const fetch = () => async (dispatch) => {
  createAPIEndpoint(ENDPOINTS.BRAND)
    .fetchAll()
    .then((response) => {
      dispatch({
        type: BRAND_SUCCESS,
        payload: response.data,
      })
    })
    .catch((error) => {
      if (error.response.status === 200) {
        dispatch({
          type: BRAND_FAILED,
          payload: error.response.data,
        })
      } else if (error.response.status === 401) {
        dispatch({
          type: BRAND_FAILED,
          payload: "Login failed! Please check email and password properly ...",
        })
      }
    })
}

const exportDefault = { fetch }

export default exportDefault
