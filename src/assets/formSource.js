import LockIcon from "@mui/icons-material/Lock"
import MailLockIcon from "@mui/icons-material/MailLock"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import GoogleIcon from "@mui/icons-material/Google"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import PersonIcon from "@mui/icons-material/Person"
import EmailIcon from "@mui/icons-material/Email"
import BadgeIcon from "@mui/icons-material/Badge"

export const userInputs = [
  {
    id: 1,
    label: "Username",
    type: "text",
    placeholder: "john_doe",
  },
  {
    id: 2,
    label: "Name and surname",
    type: "text",
    placeholder: "John Doe",
  },
  {
    id: 3,
    label: "Email",
    type: "mail",
    placeholder: "john_doe@gmail.com",
  },
  {
    id: 4,
    label: "Phone",
    type: "text",
    placeholder: "+1 234 567 89",
  },
  {
    id: 5,
    label: "Password",
    type: "password",
  },
  {
    id: 6,
    label: "Address",
    type: "text",
    placeholder: "Elton St. 216 NewYork",
  },
  {
    id: 7,
    label: "Country",
    type: "text",
    placeholder: "USA",
  },
]

export const productInputs = [
  {
    id: 1,
    label: "Title",
    type: "text",
    placeholder: "Apple Macbook Pro",
  },
  {
    id: 2,
    label: "Description",
    type: "text",
    placeholder: "Description",
  },
  {
    id: 3,
    label: "Category",
    type: "text",
    placeholder: "Computers",
  },
  {
    id: 4,
    label: "Price",
    type: "text",
    placeholder: "100",
  },
  {
    id: 5,
    label: "Stock",
    type: "text",
    placeholder: "in stock",
  },
]

export const loginInputs = [
  {
    id: 1,
    name: "email",
    type: "email",
    placeholder: "Email",
    label: "Email",
    icon: <MailLockIcon className="icon-form" />,
  },
  {
    id: 2,
    name: "password",
    type: "password",
    placeholder: "Password",
    label: "Password",
    icon: <LockIcon className="icon-form" />,
  },
]

export const registrationInputs = [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "Username",
    label: "Username",
    icon: <PersonIcon className="icon-form" />,
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    label: "Email",
    icon: <EmailIcon className="icon-form" />,
  },
  {
    id: 3,
    name: "fullname",
    type: "text",
    placeholder: "Full Name",
    label: "Full Name",
    icon: <BadgeIcon className="icon-form" />,
  },
  {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "Password",
    label: "Password",
    icon: <LockIcon className="icon-form" />,
  },
  {
    id: 5,
    name: "cpassword",
    type: "password",
    placeholder: "Confirm Password",
    label: "Confirm Password",
    icon: <LockIcon className="icon-form" />,
  },
]

export const socialInputs = [
  {
    id: 1,
    to: "facebook.com",
    icon: <FacebookIcon className="icon_social" />,
  },
  {
    id: 2,
    to: "gmail.com",
    icon: <GoogleIcon className="icon_social" />,
  },
  {
    id: 3,
    to: "twitter.com",
    icon: <TwitterIcon className="icon_social" />,
  },
  {
    id: 4,
    to: "linkedin.com",
    icon: <LinkedInIcon className="icon_social" />,
  },
]
