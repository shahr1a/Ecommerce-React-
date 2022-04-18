import axios from "axios"

export const ENDPOINTS = {
  LOGIN: "auth/login",
  LOGINBYTOKEN: "auth/retrieve",
  REGISTER: "auth/register",
  USER: "user/all",
  USERDELETE: "user/delete",
  BRAND: "brand/all",
  BRANDADD: "brand/add",
  BRANDDELETE: "brand/delete",
  SLIDER: "slider/all",
  SLIDERADD: "slider/add",
  SLIDERDELETE: "slider/delete",
  CATEGORY: "category/all",
  CATEGORYADD: "category/add",
  CATEGORYDELETE: "category/delete",
  ORDER: "order/all",
  ORDERDELETE: "order/delete",
  PRODUCT: "product/all",
  PRODUCT: "product/all",
  SUBCATEGORY: "subcategory/all",
  SUBCATEGORYADD: "subcategory/add",
  SUBCATEGORYDELETE: "subcategory/delete",
  SUBSUBCATEGORYADD: "subsubcategory/add",
  SUBSUBCATEGORYDELETE: "subsubcategory/delete",
  SUBSUBCATEGORY: "subsubcategory/all",
  SHIPPINGDIVISION: "shipping-area/division-all",
  SHIPPINGDISTRICT: "shipping-area/district-all",
  SHIPPINGSTATE: "shipping-area/state-all",
  COUPON: "coupon/all",
  COUPONADD: "coupon/add",
  COUPONDELETE: "coupon/delete",
}

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
})

export const setAuthToken = (token = localStorage.getItem("token")) => {
  if (token) api.defaults.headers.common["Authorization"] = "Bearer" + token
  else delete api.defaults.headers.common["Authorization"]
}

export const createAPIEndpoint = (endpoint) => {
  let url = endpoint
  let url2 = endpoint + "/"

  return {
    fetchAll: async () => await api.get(url),
    fetchById: async (id) => await api.get(url2 + id),
    post: async (record) => await api.post(url, record),
    update: async (id, updatedRecord) =>
      await api.patch(url + id, updatedRecord),
    delete: async (id) => await api.delete(url2 + id),
    fetchByToken: async (obj) => await api.post(url, obj),
  }
}
