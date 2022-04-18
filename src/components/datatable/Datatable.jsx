import React, { useEffect, useState } from "react"
import "./datatable.scss"
import { DataGrid } from "@mui/x-data-grid"

import {
  userColumns,
  brandColumns,
  sliderColumns,
  categoryColumns,
  couponColumns,
  productColumns,
  subcategoryColumns,
  subsubcategoryColumns,
  shippingdivisionColumns,
  shippingdistrictColumns,
  shippingstateColumns,
} from "../../assets/datatablesource"
import { Link } from "react-router-dom"
import { createAPIEndpoint, ENDPOINTS } from "../../api"
import { useDispatch, useSelector } from "react-redux"
import BrandAction from "../../redux/actions/brandAction"
import CategoryAction from "../../redux/actions/categoryAction"
import SubcategoryAction from "../../redux/actions/subcategoryAction"
import SubsubcategoryAction from "../../redux/actions/subsubcategoryAction"

const Datatable = ({ type }) => {
  const [data, setData] = useState([])
  const [column, setColumn] = useState([])
  const [trigger, setTrigger] = useState(false)

  const dispatch = useDispatch()
  const brandReducer = useSelector((state) => state.Brand)
  const categoryReducer = useSelector((state) => state.Category)
  const subcategoryReducer = useSelector((state) => state.Subcategory)
  const subsubcategoryReducer = useSelector((state) => state.Subsubcategory)

  useEffect(() => {
    if (type === "Users") {
      setColumn(userColumns)
      createAPIEndpoint(ENDPOINTS.USER)
        .fetchAll()
        .then((response) => setData(response.data))
        .catch((error) => {
          if (error.response.status === 400) console.log("failed")
          else if (error.response.status === 401) console.log("Unauthorized")
        })
    } else if (type === "Brands") {
      setColumn(brandColumns)
      dispatch(BrandAction.fetch())
      createAPIEndpoint(ENDPOINTS.BRAND)
        .fetchAll()
        .then((response) => setData(response.data))
        .catch((error) => {
          if (error.response.status === 400) console.log("failed")
          else if (error.response.status === 401) console.log("Unauthorized")
        })
    } else if (type === "Sliders") {
      setColumn(sliderColumns)
      createAPIEndpoint(ENDPOINTS.SLIDER)
        .fetchAll()
        .then((response) => setData(response.data))
        .catch((error) => {
          if (error.response.status === 400) console.log("failed")
          else if (error.response.status === 401) console.log("Unauthorized")
        })
    } else if (type === "Categories") {
      setColumn(categoryColumns)
      dispatch(CategoryAction.fetch())
      createAPIEndpoint(ENDPOINTS.CATEGORY)
        .fetchAll()
        .then((response) => setData(response.data))
        .catch((error) => {
          if (error.response.status === 400) console.log("failed")
          else if (error.response.status === 401) console.log("Unauthorized")
        })
    } else if (type === "SubCategories") {
      setColumn(subcategoryColumns)
      dispatch(SubcategoryAction.fetch())
      createAPIEndpoint(ENDPOINTS.SUBCATEGORY)
        .fetchAll()
        .then((response) => setData(response.data))
        .catch((error) => {
          if (error.response.status === 400) console.log("failed")
          else if (error.response.status === 401) console.log("Unauthorized")
        })
    } else if (type === "SubSubCategories") {
      setColumn(subsubcategoryColumns)
      dispatch(SubsubcategoryAction.fetch())
      createAPIEndpoint(ENDPOINTS.SUBSUBCATEGORY)
        .fetchAll()
        .then((response) => setData(response.data))
        .catch((error) => {
          if (error.response.status === 400) console.log("failed")
          else if (error.response.status === 401) console.log("Unauthorized")
        })
    } else if (type === "Coupons") {
      setColumn(couponColumns)
      createAPIEndpoint(ENDPOINTS.COUPON)
        .fetchAll()
        .then((response) => setData(response.data))
        .catch((error) => {
          if (error.response.status === 400) console.log("failed")
          else if (error.response.status === 401) console.log("Unauthorized")
        })
    } else if (type === "Products") {
      setColumn(productColumns)
      createAPIEndpoint(ENDPOINTS.PRODUCT)
        .fetchAll()
        .then((response) => setData(response.data))
        .catch((error) => {
          if (error.response.status === 400) console.log("failed")
          else if (error.response.status === 401) console.log("Unauthorized")
        })
    } else if (type === "ShippingDivision") {
      setColumn(shippingdivisionColumns)
      createAPIEndpoint(ENDPOINTS.SHIPPINGDIVISION)
        .fetchAll()
        .then((response) => setData(response.data))
        .catch((error) => {
          if (error.response.status === 400) console.log("failed")
          else if (error.response.status === 401) console.log("Unauthorized")
        })
    } else if (type === "ShippingDistrict") {
      setColumn(shippingdistrictColumns)
      createAPIEndpoint(ENDPOINTS.SHIPPINGDISTRICT)
        .fetchAll()
        .then((response) => setData(response.data))
        .catch((error) => {
          if (error.response.status === 400) console.log("failed")
          else if (error.response.status === 401) console.log("Unauthorized")
        })
    } else if (type === "ShippingState") {
      setColumn(shippingstateColumns)
      createAPIEndpoint(ENDPOINTS.SHIPPINGSTATE)
        .fetchAll()
        .then((response) => setData(response.data))
        .catch((error) => {
          if (error.response.status === 400) console.log("failed")
          else if (error.response.status === 401) console.log("Unauthorized")
        })
    } // else if (type === "Order") {
    //   setColumn(orderColumns)
    //   createAPIEndpoint(ENDPOINTS.ORDER)
    //     .fetchAll()
    //     .then((response) => setData(response.data))
    //     .catch((error) => {
    //       if (error.response.status === 400) console.log("failed")
    //       else if (error.response.status === 401) console.log("Unauthorized")
    //     })
    // }
  }, [type, trigger])

  useEffect(() => {
    if (trigger) {
      if (type === "Brands") {
        setData(brandReducer.brand)
        setTrigger(false)
      } else if (type === "Categories") {
        setData(categoryReducer.category)
        setTrigger(false)
      } else if (type === "Subcategories") {
        setData(subcategoryReducer.subcategory)
        setTrigger(false)
      } else if (type === "Subsubcategories") {
        setData(subsubcategoryReducer.subsubcategory)
        setTrigger(false)
      }
    }
  }, [trigger])

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id))

    switch (type) {
      case "Brands":
        createAPIEndpoint(ENDPOINTS.BRANDDELETE)
          .fetchById(id)
          .then((response) => {
            setTrigger(true)
          })
          .catch((error) => {
            if (error.response.status === 400) console.log("failed")
            else if (error.response.status === 401) console.log("Unauthorized")
          })

      case "Users":
        createAPIEndpoint(ENDPOINTS.USERDELETE)
          .fetchById(id)
          .then((response) => {
            setTrigger(true)
          })
          .catch((error) => {
            if (error.response.status === 400) console.log("failed")
            else if (error.response.status === 401) console.log("Unauthorized")
          })

      case "Categories":
        createAPIEndpoint(ENDPOINTS.CATEGORYDELETE)
          .fetchById(id)
          .then((response) => {
            setTrigger(true)
          })
          .catch((error) => {
            if (error.response.status === 400) console.log("failed")
            else if (error.response.status === 401) console.log("Unauthorized")
          })

      case "Subcategories":
        createAPIEndpoint(ENDPOINTS.SUBCATEGORYDELETE)
          .fetchById(id)
          .then((response) => {
            setTrigger(true)
          })
          .catch((error) => {
            if (error.response.status === 400) console.log("failed")
            else if (error.response.status === 401) console.log("Unauthorized")
          })

      case "Subsubcategories":
        createAPIEndpoint(ENDPOINTS.SUBSUBCATEGORYDELETE)
          .fetchById(id)
          .then((response) => {
            setTrigger(true)
          })
          .catch((error) => {
            if (error.response.status === 400) console.log("failed")
            else if (error.response.status === 401) console.log("Unauthorized")
          })

      case "Sliders":
        createAPIEndpoint(ENDPOINTS.SLIDERDELETE)
          .fetchById(id)
          .then((response) => {
            setTrigger(true)
          })
          .catch((error) => {
            if (error.response.status === 400) console.log("failed")
            else if (error.response.status === 401) console.log("Unauthorized")
          })

      case "Coupons":
        createAPIEndpoint(ENDPOINTS.COUPONDELETE)
          .fetchById(id)
          .then((response) => {
            setTrigger(true)
          })
          .catch((error) => {
            if (error.response.status === 400) console.log("failed")
            else if (error.response.status === 401) console.log("Unauthorized")
          })

      case "Products":
        createAPIEndpoint(ENDPOINTS.PRODUCTDELETE)
          .fetchById(id)
          .then((response) => {
            setTrigger(true)
          })
          .catch((error) => {
            if (error.response.status === 400) console.log("failed")
            else if (error.response.status === 401) console.log("Unauthorized")
          })
    }
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 400,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/${type.toLowerCase()}/test`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
            {type === "Slider" ? (
              <div
                className="viewButton"
                onClick={() => handleDelete(params.row.id)}
              >
                Change Status
              </div>
            ) : (
              ""
            )}
          </div>
        )
      },
    },
  ]
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {type} List
        <Link to={`/${type.toLowerCase()}/new`} className="link" type={type}>
          Add New {type}
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={column.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}
export default Datatable
