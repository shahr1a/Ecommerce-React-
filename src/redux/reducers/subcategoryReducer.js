import {
  SUBCATEGORY_SUCCESS,
  SUBCATEGORY_FAILED,
} from "../constants/subcategoryConstants"

const initialState = {
  loading: true,
  subcategory: null,
  error: null,
}

const subcategoryReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SUBCATEGORY_SUCCESS:
      return {
        subcategory: payload,
        loading: false,
        error: null,
      }

    case SUBCATEGORY_FAILED:
      return {
        subcategory: null,
        loading: false,
        error: payload,
      }

    default:
      return state
  }
}

export default subcategoryReducer
