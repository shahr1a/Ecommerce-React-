import { createAPIEndpoint, ENDPOINTS } from "../api"

const coupon = (values) => {
  createAPIEndpoint(ENDPOINTS.COUPONADD)
    .post(values)
    .then((response) => {
      console.log(response)
      return response
    })
    .catch((error) => {
      console.log(error)
    })
}

export default coupon
