import authReducer from "./authReducer"
import { combineReducers } from "redux"
import registrationReducer from "./registrationReducers"
import brandReducer from "./brandReducer"
import categoryReducer from "./categoryReducer"
import subcategoryReducer from "./subcategoryReducer"
import subsubcategoryReducer from "./subsubcategoryReducer"
import orderReducer from "./orderReducer"

const rootReducer = combineReducers({
  Auth: authReducer,
  Register: registrationReducer,
  Brand: brandReducer,
  Category: categoryReducer,
  Subcategory: subcategoryReducer,
  Subsubcategory: subsubcategoryReducer,
  Order: orderReducer,
})

export default rootReducer
