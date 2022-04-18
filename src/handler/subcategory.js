import { createAPIEndpoint, ENDPOINTS } from "../api"

const subcategory = (values) => {
  createAPIEndpoint(ENDPOINTS.SUBCATEGORYADD)
    .post(values)
    .then((response) => {
      console.log(response)
      return response
    })
    .catch((error) => {
      console.log(error)
    })
}

export default subcategory
