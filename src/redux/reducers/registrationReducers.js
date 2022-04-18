import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
} from "../constants/registraionConstants"

const initialState = {
  isSuccessful: true,
  loading: true,
  user: null,
  error: null,
  redirect: false,
}

const registrationReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        isSuccessful: true,
        user: payload,
        loading: false,
        error: null,
        redirect: true,
      }

    case REGISTER_FAILED:
      return {
        isSuccessful: false,
        user: null,
        loading: false,
        error: payload,
        redirect: false,
      }

    default:
      return state
  }
}

export default registrationReducer
