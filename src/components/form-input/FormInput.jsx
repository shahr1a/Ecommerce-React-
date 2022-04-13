import React from "react"
import "./form-input.scss"

const FormInput = (props) => {
  const { label, errorMessage, icon, onChange, id, ...inputProps } = props
  
  return (
      <div className="formInput">
        <div className="input-field">
          {icon}
          <input {...inputProps} onChange={onChange}/>   
        </div>

      </div>
  )
}

export default FormInput
