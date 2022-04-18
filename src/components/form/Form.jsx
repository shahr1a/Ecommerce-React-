import React, { useEffect, useState } from "react"
import "./form.scss"

import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import TextField from "@mui/material/TextField"

import FormHandler from "../../handler/formHandler"

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined"
import { Navigate, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const Form = ({ inputs, title, type }) => {
  const [file, setFile] = useState("")
  const [values, setValues] = useState({})
  const [response, setResponse] = useState({})
  const navigate = useNavigate()
  const [trigger, setTrigger] = useState(false)
  const brandReducer = useSelector((state) => state.Brand)
  const categoryReducer = useSelector((state) => state.Category)
  const subcategoryReducer = useSelector((state) => state.Subcategory)
  const subsubcategoryReducer = useSelector((state) => state.Subsubcategory)

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  console.log(brandReducer.brand)

  const formSubmit = (e) => {
    e.preventDefault()

    setResponse(FormHandler(values, type))
    setTrigger(true)
  }

  useEffect(() => {
    console.log(response)
    if (trigger) {
      setTrigger(false)
      navigate(`/${type}`)
    }
  }, [response])

  return (
    <div className="form">
      <div className="top">
        <h1>{title}</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
        </div>
        <div className="right">
          <form onSubmit={formSubmit}>
            <div className="formInput">
              <label htmlFor="file">
                Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                name=""
                id="file"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            {inputs.map((input) => (
              <div className="formInput" key={input._id}>
                <label>{input.label}</label>
                <input
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                  onChange={onChange}
                />
              </div>
            ))}
            <div className="formInput">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
