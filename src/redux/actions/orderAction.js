import { createAPIEndpoint, ENDPOINTS } from "../../api"
import { ORDER_SUCCESS, ORDER_FAILED } from "../constants/orderConstants"

const fetch = () => async (dispatch) => {
  createAPIEndpoint(ENDPOINTS.ORDER)
    .fetchAll()
    .then((response) => {
      dispatch({
        type: ORDER_SUCCESS,
        payload: response.data,
      })
    })
    .catch((error) => {
      if (error.response.status === 200) {
        dispatch({
          type: ORDER_FAILED,
          payload: error.response.data,
        })
      } else if (error.response.status === 401) {
        dispatch({
          type: ORDER_FAILED,
          payload: "Login failed! Please check email and password properly ...",
        })
      }
    })
}

const exportDefault = { fetch }

export default exportDefault
