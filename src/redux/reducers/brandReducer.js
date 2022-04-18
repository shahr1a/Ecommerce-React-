import { BRAND_SUCCESS, BRAND_FAILED } from "../constants/brandConstants"

const initialState = {
  loading: true,
  brand: null,
  error: null,
}

const brandReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case BRAND_SUCCESS:
      return {
        brand: payload,
        loading: false,
        error: null,
      }

    case BRAND_FAILED:
      return {
        brand: null,
        loading: false,
        error: payload,
      }

    default:
      return state
  }
}

export default brandReducer
