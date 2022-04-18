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

export const brandInputs = [
  {
    _id: 1,
    name: "type",
    // label: "Brand Name En",
    type: "hidden",
    placeholder: "Apple",
    value: "brand",
  },
  {
    _id: 2,
    name: "brand_name_en",
    label: "Brand Name En",
    type: "text",
    placeholder: "Apple",
  },
  {
    _id: 3,
    name: "brand_name_bn",
    label: "Brand Name Bn",
    type: "text",
    placeholder: "আপেল",
  },
]

export const sliderInputs = [
  {
    _id: 1,
    // label: "Brand Name En",
    type: "hidden",
    placeholder: "Apple",
  },
  {
    _id: 2,
    name: "title",
    label: "Title",
    type: "text",
    placeholder: "Slider Title",
  },
  {
    _id: 3,
    name: "description",
    label: "Description",
    type: "text",
    placeholder: "Slider Description",
  },
]

export const couponInputs = [
  {
    _id: 1,
    // label: "Brand Name En",
    type: "hidden",
    placeholder: "Apple",
  },
  {
    _id: 2,
    name: "coupon_name",
    label: "Coupon Name",
    type: "text",
    placeholder: "Slider Title",
  },
  {
    _id: 3,
    name: "coupon_discount",
    label: "Discount (%)",
    type: "text",
    placeholder: "10%, 20%, ...",
  },
  {
    _id: 4,
    name: "coupon_validity",
    label: "Validity",
    type: "date",
    placeholder: "Date",
  },
]

export const subcategoryInput = [
  {
    _id: 1,
    // label: "Brand Name En",
    type: "hidden",
    placeholder: "Apple",
  },
  {
    _id: 2,
    name: "category_id",
    label: "Category",
    type: "text",
    placeholder: "Electronics",
  },
  {
    _id: 3,
    name: "subcategory_name_en",
    label: "SubCategory Name EN",
    type: "text",
    placeholder: "Electronics",
  },
  {
    _id: 4,
    name: "subcategory_name_bn",
    label: "SubCategory Name BN",
    type: "text",
    placeholder: "ইলেকট্রনিক্স",
  },
]

export const subsubcategoryInputs = [
  {
    _id: 1,
    // label: "Brand Name En",
    type: "hidden",
    placeholder: "Apple",
  },
  {
    _id: 2,
    name: "category_id",
    label: "Category",
    type: "text",
    placeholder: "Electronics",
  },
  {
    _id: 3,
    name: "subcategory_id",
    label: "SubCategory",
    type: "text",
    placeholder: "Electronics",
  },
  {
    _id: 4,
    name: "subsubcategory_name_en",
    label: "SubSubCategory Name EN",
    type: "text",
    placeholder: "Electronics",
  },
  {
    _id: 5,
    name: "subsubcategory_name_bn",
    label: "SubSubCategory Name BN",
    type: "text",
    placeholder: "ইলেকট্রনিক্স",
  },
]

export const categoryInputs = [
  {
    _id: 1,
    // label: "Brand Name En",
    type: "hidden",
    placeholder: "Apple",
  },
  {
    _id: 2,
    name: "category_name_en",
    label: "Category Name EN",
    type: "text",
    placeholder: "Electronics",
  },
  {
    _id: 3,
    name: "category_name_bn",
    label: "Category Name BN",
    type: "text",
    placeholder: "ইলেকট্রনিক্স",
  },
  {
    _id: 4,
    name: "category_icon",
    label: "ICON",
    type: "text",
    placeholder: "",
  },
]

export const productInputs = [
  {
    _id: 1,
    // label: "Title",
    type: "hidden",
    placeholder: "Apple Macbook Pro",
  },
  {
    _id: 2,
    name: "brand_id",
    label: "Select Brand",
    type: "text",
    placeholder: "",
  },
  {
    _id: 3,
    name: "category_id",
    label: "Select a Category",
    type: "text",
    placeholder: "",
  },
  {
    _id: 4,
    name: "subcategory_id",
    label: "Select a SubCategory",
    type: "text",
    placeholder: "",
  },
  {
    _id: 5,
    name: "subsubcategory_id",
    label: "Select a Sub SubCategory",
    type: "text",
    placeholder: "",
  },
  {
    _id: 6,
    name: "product_name_en",
    label: "Product Name En",
    type: "text",
    placeholder: "",
  },
  {
    _id: 7,
    name: "product_name_bn",
    label: "Product Name Bn",
    type: "text",
    placeholder: "",
  },
  {
    _id: 8,
    name: "selling_price",
    label: "Selling Price",
    type: "text",
    placeholder: "100",
  },
  {
    _id: 9,
    name: "discount_price",
    label: "Discount Price",
    type: "text",
    placeholder: "100",
  },
  {
    _id: 10,
    name: "product_code",
    label: "Product Code",
    type: "text",
    placeholder: "Code",
  },
  {
    _id: 11,
    name: "product_qty",
    label: "Product Quantity",
    type: "text",
    placeholder: "Quantity",
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
    errorMessage: "Email is invalid",
  },
  {
    id: 2,
    name: "password",
    type: "password",
    placeholder: "Password",
    label: "Password",
    icon: <LockIcon className="icon-form" />,
    errorMessage: "Password did not match",
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
    errorMessage: "Only letter and number allowed",
    pattern: "^[A-Za-z0-9]{3,}$",
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    label: "Email",
    icon: <EmailIcon className="icon-form" />,
    errorMessage: "Invalid email format",
  },
  {
    id: 3,
    name: "name",
    type: "text",
    placeholder: "Full Name",
    label: "Full Name",
    icon: <BadgeIcon className="icon-form" />,
    errorMessage: "Only alphabetic letters allowed",
  },
  {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "Password",
    label: "Password",
    icon: <LockIcon className="icon-form" />,
    errorMessage:
      "At least 6 character and letter, number and special character",
    pattern: `^[a-zA-Z0-9!@#$%^&*]{6,25}$`,
  },
  {
    id: 5,
    name: "password_confirmation",
    type: "password",
    placeholder: "Confirm Password",
    label: "Confirm Password",
    icon: <LockIcon className="icon-form" />,
    errorMessage: "Password did not match",
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
