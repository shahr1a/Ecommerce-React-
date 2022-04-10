import React from "react"
import "./new.scss"

import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Form from "../../components/form/Form"

const New = ({ inputs, title }) => {
  // let location = window.location.href.split("/")
  // let type

  // switch (location[3]) {
  //   case "users":
  //     type = "User"
  //     break
  //   case "products":
  //     type = "Product"
  //     break
  //   default:
  //     break
  // }
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <Form inputs={inputs} title={title} />
      </div>
    </div>
  )
}

export default New
