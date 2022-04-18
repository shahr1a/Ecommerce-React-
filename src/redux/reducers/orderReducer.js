import { ORDER_SUCCESS, ORDER_FAILED } from "../constants/orderConstants"

const initialState = {
  loading: true,
  order: null,
  error: null,
}

const orderReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case ORDER_SUCCESS:
      return {
        order: payload,
        loading: false,
        error: null,
      }

    case ORDER_FAILED:
      return {
        order: null,
        loading: false,
        error: payload,
      }

    default:
      return state
  }
}

export default orderReducer
