import { createAPIEndpoint, ENDPOINTS } from "../api"

const brand = (values) => {
  createAPIEndpoint(ENDPOINTS.BRANDADD)
    .post(values)
    .then((response) => {
      console.log(response)
      return response
    })
    .catch((error) => {
      console.log(error)
    })
}

export default brand
