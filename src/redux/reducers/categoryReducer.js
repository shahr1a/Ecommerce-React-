import {
  CATEGORY_SUCCESS,
  CATEGORY_FAILED,
} from "../constants/categoryConstants"

const initialState = {
  loading: true,
  category: null,
  error: null,
}

const categoryReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case CATEGORY_SUCCESS:
      return {
        category: payload,
        loading: false,
        error: null,
      }

    case CATEGORY_FAILED:
      return {
        category: null,
        loading: false,
        error: payload,
      }

    default:
      return state
  }
}

export default categoryReducer
