import React from "react"
import "./form-input.scss"

const FormInput = (props) => {
  const { label, icon, onChange, id, ...inputProps } = props
  return (
    <div className="formInput">
      {icon}
      <input {...inputProps} onChange={onChange} />
    </div>
  )
}

export default FormInput
