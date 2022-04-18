import React from "react"
import "./sidebar.scss"

import DashboardIcon from "@mui/icons-material/Dashboard"
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined"
import AndroidOutlinedIcon from "@mui/icons-material/AndroidOutlined"
import LinearScaleOutlinedIcon from "@mui/icons-material/LinearScaleOutlined"
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined"
import CommentBankOutlinedIcon from "@mui/icons-material/CommentBankOutlined"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import StoreIcon from "@mui/icons-material/Store"
import InsertChartIcon from "@mui/icons-material/InsertChart"
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined"
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"
import { Link } from "react-router-dom"
import LoginAction from "../../redux/actions/authAction"
import { useDispatch } from "react-redux"

const Sidebar = () => {
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(LoginAction.logout())
  }

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Proshop Admin Panel</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <GroupOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/brands" style={{ textDecoration: "none" }}>
            <li>
              <AndroidOutlinedIcon className="icon" />
              <span>Brands</span>
            </li>
          </Link>
          <Link to="/sliders" style={{ textDecoration: "none" }}>
            <li>
              <LinearScaleOutlinedIcon className="icon" />
              <span>Sliders</span>
            </li>
          </Link>
          <Link to="/categories" style={{ textDecoration: "none" }}>
            <li>
              <CategoryOutlinedIcon className="icon" />
              <span>Category</span>
            </li>
          </Link>
          <Link to="/subcategories" style={{ textDecoration: "none" }}>
            <li>
              <CategoryOutlinedIcon className="icon" />
              <span>Sub Category</span>
            </li>
          </Link>
          <Link to="/subsubcategories" style={{ textDecoration: "none" }}>
            <li>
              <CategoryOutlinedIcon className="icon" />
              <span>Sub Sub Category</span>
            </li>
          </Link>

          <Link to="/coupons" style={{ textDecoration: "none" }}>
            <li>
              <CommentBankOutlinedIcon className="icon" />
              <span>Coupon</span>
            </li>
          </Link>

          <Link to="/orders" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Orders</span>
            </li>
          </Link>

          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>

          <Link to="/shipping" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Shipping Division</span>
            </li>
          </Link>
          <Link to="/shipping/district" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Shipping District</span>
            </li>
          </Link>
          <Link to="/shipping/state" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Shipping State</span>
            </li>
          </Link>

          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Pofile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span onClick={logout}>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar
