import React, { useState, useEffect } from "react"
import "./authentication.scss"
import FormInput from "../../components/form-input/FormInput"
import logo from "../../assets/svg/logo.svg"
import logo1 from "../../assets/svg/logo1.svg"

import {
  loginInputs,
  registrationInputs,
  socialInputs,
} from "../../assets/formSource"
import { Link, Navigate } from "react-router-dom"
import { setAuthToken } from "../../api"
import { useDispatch, useSelector } from "react-redux"
import AuthAction from "../../redux/actions/authAction"
import RegistrationAction from "../../redux/actions/registrationAction"
import LoginAction from "../../redux/actions/authAction"

const Authentication = () => {
  const [values_register, setValues_register] = useState({
    username: "",
    email: "",
    name: "",
    password: "",
    password_confirmation: "",
  })

  const [value_errors_register, setValue_errors_register] = useState({})
  const [isSubmitRegister, setIsSubmitRegister] = useState(false)
  const [value_errors_signin, setValue_errors_signin] = useState({})
  const [isSubmitSingin, setIsSubmitSingin] = useState(false)

  const [serverValidationError, setServerValidationError] = useState({})

  // const [user, setUser] = useState([])

  const [values_signin, setValues_signin] = useState({
    email: "",
    password: "",
  })

  const handleSubmitSignin = (e) => {
    e.preventDefault()
    setValue_errors_signin(validateSignin(values_signin))
    setIsSubmitSingin(true)
  }

  const dispatch = useDispatch()
  const authReducer = useSelector((state) => state.Auth)
  const registrationReducer = useSelector((state) => state.Register)

  useEffect(() => {
    if (Object.keys(value_errors_signin).length === 0 && isSubmitSingin) {
      dispatch(LoginAction.login({ ...values_signin }))
    }
  }, [value_errors_signin, isSubmitSingin, dispatch])

  const handleSubmitRegister = (e) => {
    e.preventDefault()
    setServerValidationError({})
    setValue_errors_register(validate(values_register))
    setIsSubmitRegister(true)
  }

  useEffect(() => {
    if (Object.keys(value_errors_register).length === 0 && isSubmitRegister) {
      console.log(values_register)

      dispatch(RegistrationAction.registeration({ ...values_register }))
    }
  }, [value_errors_register, isSubmitRegister, dispatch])

  const validateSignin = (values) => {
    const errors = {}
    if (!values.email) {
      errors.email = "Email is required!"
    }

    if (!values.password) {
      errors.password = "Password is required!"
    }

    return errors
  }

  const validate = (values) => {
    const errors = {}
    const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    const regexUsername = /^[a-zA-Z0-9]+$/
    const regexName = /^(?![\s.]+$)[a-zA-Z\s.]*$/

    if (!values.username) {
      errors.username = "Username is required!"
    } else if (!regexUsername.test(values.username)) {
      errors.username = "Username can only contain letter and number!"
    }

    if (!values.email) {
      errors.email = "Email is required!"
    } else if (!regexEmail.test(values.email)) {
      errors.email = "This is not a valid email format!"
    }

    if (!values.name) {
      errors.name = "Full Name is required!"
    } else if (!regexName.test(values.name)) {
      errors.name = "Name cannot not contain number or special character"
    }

    if (!values.password) {
      errors.password = "Password is required!"
    } else if (values.password < 4) {
      errors.password = "Password must be at least 4 characters long!"
    }

    if (!values.password_confirmation) {
      errors.password_confirmation = "Cannot be empty!"
    } else if (values.password !== values.password_confirmation) {
      errors.password_confirmation = "Passwords did not match!"
    }

    return errors
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

    setValue_errors_register({
      ...value_errors_register,
      [e.target.name]: "",
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

  useEffect(() => {
    if (!registrationReducer.isSuccessful) {
      setServerValidationError(registrationReducer.error)
    } else setServerValidationError({})
  }, [registrationReducer.error, authReducer.error])

  if (authReducer.isAuthenticated) return <Navigate to="/" />

  return (
    <div className="authentication">
      <div className="authentication-container">
        <div className="authentication-form">
          <div className="signin-signup">
            <form onSubmit={handleSubmitSignin} className="sign-in-form">
              <h2 className="title">Sign in</h2>
              {loginInputs.map((input) => (
                <>
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values_signin[input.name]}
                    onChange={onChangeSignin}
                  />
                  <span className="error">
                    {value_errors_signin[input.name]}
                  </span>
                </>
              ))}
              <button type="submit" className="btn solid">
                Login
              </button>
              <span className="error">
                {authReducer.error !== null ? authReducer.error : null}
              </span>
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

            <form onSubmit={handleSubmitRegister} className="sign-up-form">
              <h2 className="title">Register</h2>
              {registrationInputs.map((input) => (
                <>
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values_register[input.name]}
                    onChange={onChangeRegister}
                  />
                  <span className="error">
                    {value_errors_register[input.name]}
                  </span>
                  <span className="error">
                    {serverValidationError[input.name]
                      ? serverValidationError[input.name][0]
                      : null}
                  </span>
                </>
              ))}
              <button type="submit" className="btn solid">
                Register
              </button>
              {/* {registrationReducer.} */}
              <span className="error"></span>
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
