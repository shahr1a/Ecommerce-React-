import { createAPIEndpoint, setAuthToken, ENDPOINTS } from "../../api"
import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_TOKEN_SUCCESS,
  LOGIN_TOKEN_FAILURE,
  LOGOUT_SUCCESS,
} from "../constants/authConstants"

// const login = (user) => {
//   return {
//     type: LOGIN_SUCCESS,
//     payload: user,
//   }
// }

const login = (values_signin) => async (dispatch) => {
  createAPIEndpoint(ENDPOINTS.LOGIN)
    .post(values_signin)
    .then((response) => {
      if (response.data.status === "0") {
        dispatch({
          type: LOGIN_FAILED,
          payload: response.data.message,
        })
      } else {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data,
        })

        setAuthToken(response.data.token.access_token)
        localStorage.setItem("token", response.data.token.access_token)
        localStorage.setItem("uid", JSON.stringify(response.data.token.user_id))
      }
    })
    .catch((error) => {
      if (error.response.status === 200) {
        dispatch({
          type: LOGIN_FAILED,
          payload: JSON.parse(error.response.data),
        })
      } else if (error.response.status === 401) {
        console.log(error.response)
        dispatch({
          type: LOGIN_FAILED,
          payload: "Login failed! Please check email and password properly ...",
        })
      }
    })
}

const logout = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("uid")
  setAuthToken(null)
  return {
    type: LOGOUT_SUCCESS,
  }
}

export const retrieveSession = () => async (dispatch) => {
  if (localStorage.getItem("token")) {
    let token = localStorage.getItem("token")

    let obj = { token: token }
    setAuthToken(token)

    createAPIEndpoint(ENDPOINTS.LOGINBYTOKEN)
      .fetchByToken(obj)
      .then((response) => {
        if (response.data.values === null) {
          dispatch({
            type: LOGIN_TOKEN_FAILURE,
          })
          dispatch(logout())
          localStorage.setItem("message", response.data.message)
        } else
          dispatch({
            type: LOGIN_TOKEN_SUCCESS,
            payload: response.data.values,
          })
      })
      .catch((error) => {
        if (error.response.status === 400 || error.response.status === 401) {
          dispatch(logout())
        }
      })
  } else
    dispatch({
      type: LOGOUT_SUCCESS,
    })
}

const exportDefault = { login, logout, retrieveSession }

export default exportDefault
