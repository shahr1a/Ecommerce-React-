import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

const PrivateOutlet = () => {
  const authReducer = useSelector((state) => state.Auth)

  authReducer.isAuthenticated
    ? console.log("Authorized!")
    : console.log("Please login first to get access!")
  return authReducer.isAuthenticated ? <Outlet /> : <Navigate to="/auth" />
}

export default PrivateOutlet
