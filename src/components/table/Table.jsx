import React, { useEffect, useState } from "react"
import "./table.scss"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

import order_list from "../../assets/JsonData/order_list.json"
import { useDispatch, useSelector } from "react-redux"

import OrderAction from "../../redux/actions/orderAction"
import {
  ORDER_FAILED,
  ORDER_SUCCESS,
} from "../../redux/constants/orderConstants"
import { createAPIEndpoint, ENDPOINTS } from "../../api"

const List = () => {
  const [orderlist, setOrderlist] = useState([])
  const dispatch = useDispatch()
  const orderReducer = useSelector((state) => state.Order)

  useEffect(() => {
    async function retireveOrder() {
      createAPIEndpoint(ENDPOINTS.ORDER)
        .fetchAll()
        .then((response) => {
          dispatch({
            type: ORDER_SUCCESS,
            payload: response.data,
          })
          console.log(response.data)
          setOrderlist(response.data)
        })
        .catch((error) => {
          console.log(error)
          if (error.response.status === 200) {
            dispatch({
              type: ORDER_FAILED,
              payload: error.response.data,
            })
          } else if (error.response.status === 401) {
            dispatch({
              type: ORDER_FAILED,
              payload:
                "Login failed! Please check email and password properly ...",
            })
          }
        })
    }

    retireveOrder()
  }, [setOrderlist, dispatch])

  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell" style={{ fontWeight: "bold" }}>
                Invoice ID
              </TableCell>
              <TableCell className="tableCell" style={{ fontWeight: "bold" }}>
                Customer Name
              </TableCell>
              <TableCell className="tableCell" style={{ fontWeight: "bold" }}>
                Date
              </TableCell>
              <TableCell className="tableCell" style={{ fontWeight: "bold" }}>
                Amount
              </TableCell>
              <TableCell className="tableCell" style={{ fontWeight: "bold" }}>
                Payment Method
              </TableCell>
              <TableCell className="tableCell" style={{ fontWeight: "bold" }}>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderlist.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="tableCell">{row.invoice_no}</TableCell>
                <TableCell className="tableCell">{row.name}</TableCell>
                <TableCell className="tableCell">{row.order_date}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">{row.payment_type}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default List
