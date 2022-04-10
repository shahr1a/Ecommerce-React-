import React from "react"
import "./form.scss"

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined"

const Form = ({ inputs, title }) => {
  return (
    <div className="form">
      <div className="top">
        <h1>{title}</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img
            src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            alt=""
          />
        </div>
        <div className="right">
          <form>
            <div className="formInput">
              <label htmlFor="file">
                Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                name=""
                id="file"
                style={{ display: "none" }}
              />
            </div>
            {inputs.map((input) => (
              <div className="formInput">
                <label>{input.label}</label>
                <input
                  type={input.type}
                  name=""
                  id=""
                  placeholder={input.placeholder}
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
