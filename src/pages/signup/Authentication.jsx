import React, { useState } from "react"
import "./authentication.scss"
import FormInput from "../../components/form-input/FormInput"
import logo from "../../assets/svg/logo.svg"
import logo1 from "../../assets/svg/logo1.svg"

import {
  loginInputs,
  registrationInputs,
  socialInputs,
} from "../../assets/formSource"
import { Link } from "react-router-dom"

const Authentication = () => {
  const [values_register, setValues_register] = useState({
    username: "",
    email: "",
    fullname: "",
    password: "",
    cpassword: "",
  })

  const [values_signin, setValues_signin] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const onChangeSignin = (e) => {
    setValues_signin({
      ...values_signin,
      [e.target.name]: e.target.value,
    })
  }

  const onChangeRegister = (e) => {
    setValues_register({
      ...values_register,
      [e.target.name]: e.target.value,
    })
  }

  const signUpMode = () => {
    const sign_in_btn = document.querySelector("#sign-in-btn")
    const sign_up_btn = document.querySelector("#sign-up-btn")

    const container = document.querySelector(".authentication-container")

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode")
    })
    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode")
    })
  }

  console.log(values_signin)
  console.log(values_register)

  return (
    <div className="authentication">
      <div className="authentication-container">
        <div className="authentication-form">
          <div className="signin-signup">
            <form action="" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              {loginInputs.map((input) => (
                <div className="input-field">
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values_signin[input.name]}
                    onChange={onChangeSignin}
                  />
                </div>
              ))}
              <button type="submit" className="btn solid">
                Login
              </button>
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                {socialInputs.map((input) => (
                  <Link
                    key={input.id}
                    to={input.to}
                    style={{ textDecoration: "none" }}
                    className="social-icon"
                  >
                    {input.icon}
                  </Link>
                ))}
              </div>
            </form>

            <form action="" className="sign-up-form">
              <h2 className="title">Register</h2>
              {registrationInputs.map((input) => (
                <div className="input-field">
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values_register[input.name]}
                    onChange={onChangeRegister}
                  />
                </div>
              ))}
              <button type="submit" className="btn solid">
                Register
              </button>
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                {socialInputs.map((input) => (
                  <Link
                    key={input.id}
                    to={input.to}
                    style={{ textDecoration: "none" }}
                    className="social-icon"
                  >
                    {input.icon}
                  </Link>
                ))}
              </div>
            </form>
          </div>
        </div>
        <div className="authentication-panel">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                You don't have an account and want to create one? No worries. We
                got you covered
              </p>
              <button
                className="btn btn-register transparent"
                id="sign-up-btn"
                onClick={signUpMode}
              >
                Register New Account
              </button>
            </div>
            <img src={logo} className="image" alt="" />
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>One of us already ?</h3>
              <p></p>
              <button className="btn btn-signin transparent" id="sign-in-btn">
                Sign in
              </button>
            </div>
            <img src={logo1} className="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Authentication
