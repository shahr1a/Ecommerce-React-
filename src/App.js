import { BrowserRouter, Route, Routes } from "react-router-dom"
import {
  productInputs,
  userInputs,
  brandInputs,
  sliderInputs,
  categoryInputs,
  subcategoryInput,
  subsubcategoryInputs,
  couponInputs,
} from "./assets/formSource"
import Home from "./pages/home/Home"
import List from "./pages/list/List"
import New from "./pages/new/New"
import Authentication from "./pages/authentication/Authentication"
import Single from "./pages/single/Single"
import { useEffect } from "react"
import { retrieveSession } from "./redux/actions/authAction"
import { connect } from "react-redux"
import PrivateOutlet from "./components/PrivateOutlet"

const App = ({ retrieveSession }) => {
  useEffect(() => {
    retrieveSession()
  }, [retrieveSession])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Authentication />} />
          <Route path="/*" element={<PrivateOutlet />}>
            <Route index element={<Home />} />
            <Route path="users">
              <Route index element={<List type="Users" />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="brands">
              <Route index element={<List type="Brands" />} />
              <Route
                path="new"
                element={
                  <New
                    inputs={brandInputs}
                    title="Add New Brand"
                    type="brands"
                  />
                }
              />
            </Route>
            <Route path="orders">
              <Route index element={<List type="Orders" />} />
            </Route>
            <Route path="sliders">
              <Route index element={<List type="Sliders" />} />
              <Route
                path="new"
                element={
                  <New
                    inputs={sliderInputs}
                    title="Add New Slider"
                    type="sliders"
                  />
                }
              />
            </Route>
            <Route path="categories">
              <Route index element={<List type="Categories" />} />
              <Route
                path="new"
                element={
                  <New
                    inputs={categoryInputs}
                    title="Add New Category"
                    type="categories"
                  />
                }
              />
            </Route>
            <Route path="subcategories">
              <Route index element={<List type="SubCategories" />} />
              <Route
                path="new"
                element={
                  <New
                    inputs={subcategoryInput}
                    title="Add New SubCategory"
                    type="subcategories"
                  />
                }
              />
            </Route>
            <Route path="subsubcategories">
              <Route index element={<List type="SubSubCategories" />} />
              <Route
                path="new"
                element={
                  <New
                    inputs={subsubcategoryInputs}
                    title="Add New SubSubCategory"
                    type="subsubcategories"
                  />
                }
              />
            </Route>
            <Route path="shipping">
              <Route index element={<List type="ShippingDivision" />} />
              <Route
                path="district"
                element={<List type="ShippingDistrict" />}
              />
              <Route path="state" element={<List type="ShippingState" />} />
            </Route>
            <Route path="coupons">
              <Route index element={<List type="Coupons" />} />
              <Route
                path="new"
                element={
                  <New
                    inputs={couponInputs}
                    title="Add New Coupon"
                    type="coupons"
                  />
                }
              />
            </Route>
            <Route path="products">
              <Route index element={<List type="Products" />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default connect(null, { retrieveSession })(App)
