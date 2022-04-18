import { createAPIEndpoint, ENDPOINTS } from "../api"

const subsubcategory = (values) => {
  createAPIEndpoint(ENDPOINTS.SUBSUBCATEGORYADD)
    .post(values)
    .then((response) => {
      console.log(response)
      return response
    })
    .catch((error) => {
      console.log(error)
    })
}

export default subsubcategory
