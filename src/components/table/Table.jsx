import React from "react"
import "./table.scss"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

import order_list from "../../assets/JsonData/order_list.json"

const List = () => {
  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell" style={{ fontWeight: "bold" }}>
                Tracking ID
              </TableCell>
              <TableCell className="tableCell" style={{ fontWeight: "bold" }}>
                Product
              </TableCell>
              <TableCell className="tableCell" style={{ fontWeight: "bold" }}>
                Customer
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
            {order_list.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.customer}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">{row.method}</TableCell>
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
