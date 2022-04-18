import { createAPIEndpoint, ENDPOINTS } from "../../api"
import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
} from "../constants/registraionConstants"

const registeration = (values_register) => async (dispatch) => {
  console.log(values_register)
  createAPIEndpoint(ENDPOINTS.REGISTER)
    .post(values_register)
    .then((response) => {
      console.log(response)
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data,
      })
    })
    .catch((error) => {
      console.log(error.response.data)
      if (error.response.status === 200) {
        dispatch({
          type: REGISTER_FAILED,
          payload: JSON.parse(error.response.data),
        })
      } else if (error.response.status === 401) console.log("Unauthorized")
    })
}

const exportDefault = { registeration }

export default exportDefault
