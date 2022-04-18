import { createAPIEndpoint, ENDPOINTS } from "../api"

const slider = (values) => {
  createAPIEndpoint(ENDPOINTS.SLIDERADD)
    .post(values)
    .then((response) => {
      console.log(response)
      return response
    })
    .catch((error) => {
      console.log(error)
    })
}

export default slider
