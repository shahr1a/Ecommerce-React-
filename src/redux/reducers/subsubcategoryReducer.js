import {
  SUBSUBCATEGORY_SUCCESS,
  SUBSUBCATEGORY_FAILED,
} from "../constants/subsubcategoryConstants"

const initialState = {
  loading: true,
  subsubcategory: null,
  error: null,
}

const subsubcategoryReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SUBSUBCATEGORY_SUCCESS:
      return {
        subsubcategory: payload,
        loading: false,
        error: null,
      }

    case SUBSUBCATEGORY_FAILED:
      return {
        subsubcategory: null,
        loading: false,
        error: payload,
      }

    default:
      return state
  }
}

export default subsubcategoryReducer
