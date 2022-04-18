import { createAPIEndpoint, ENDPOINTS } from "../api"

const category = (values) => {
  createAPIEndpoint(ENDPOINTS.CATEGORYADD)
    .post(values)
    .then((response) => {
      console.log(response)
      return response
    })
    .catch((error) => {
      console.log(error)
    })
}

export default category
