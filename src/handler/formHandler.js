import brand from "./brand"
import category from "./category"
import coupon from "./coupon"
import submitProduct from "./product"
import slider from "./slider"
import subcategory from "./subcategory"
import subsubcategory from "./subsubcategory"

export default (values, type) => {
  console.log(type)
  switch (type) {
    case "brands":
      return brand(values)

    case "sliders":
      return slider(values)

    case "categories":
      return category(values)

    case "subcategories":
      return subcategory(values)

    case "subsubcategories":
      return subsubcategory(values)

    case "coupons":
      return coupon(values)

    default:
      return "Invalid"
  }
}
