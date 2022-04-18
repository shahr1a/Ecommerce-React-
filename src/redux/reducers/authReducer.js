import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_TOKEN_SUCCESS,
  LOGIN_TOKEN_FAILURE,
  LOGOUT_SUCCESS,
} from "../constants/authConstants"

const initialState = {
  isAuthenticated: false,
  loading: true,
  user: null,
  error: null,
}

const authReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        user: payload,
        loading: false,
        error: null,
      }
    case LOGIN_FAILED:
      return {
        isAuthenticated: false,
        user: null,
        loading: false,
        error: payload,
      }

    case LOGIN_TOKEN_SUCCESS:
      return {
        isAuthenticated: true,
        user: payload,
        loading: false,
        error: null,
      }

    case LOGIN_TOKEN_FAILURE:
      return {
        isAuthenticated: false,
        user: null,
        loading: false,
        error: payload,
      }

    case LOGOUT_SUCCESS:
      return {
        isAuthenticated: false,
        user: null,
        loading: false,
      }
    default:
      return state
  }
}

export default authReducer
