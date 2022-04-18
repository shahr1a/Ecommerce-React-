import React from "react"
import "./new.scss"

import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Form from "../../components/form/Form"

const New = ({ inputs, title, type }) => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <Form inputs={inputs} title={title} type={type} />
      </div>
    </div>
  )
}

export default New
