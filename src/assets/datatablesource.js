export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    width: 350,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.name}
        </div>
      )
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 350,
  },
  {
    field: "status",
    headerName: "Status",
    width: 330,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      )
    },
  },
]

export const productColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "product_name_en",
    headerName: "Product Name En",
    width: 350,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src="https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg"
            alt="avatar"
          />
          {params.row.product_name_en}
        </div>
      )
    },
  },
  {
    field: "product_name_bn",
    headerName: "Product Name Bn",
    width: 350,
  },
  {
    field: "brand.brand_name_en",
    headerName: "Brand",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">{params.row.brand?.brand_name_en}</div>
      )
    },
  },
  {
    field: "category.category_name_en",
    headerName: "Category",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.category?.category_name_en}
        </div>
      )
    },
  },
  {
    field: "product_code",
    headerName: "Product Code",
    width: 200,
  },
  {
    field: "selling_price",
    headerName: "Selling Price",
    width: 200,
    renderCell: (params) => {
      return <div className="cellWithImg">$ {params.row.selling_price}</div>
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 250,
    renderCell: (params) => {
      return (
        <div
          className={`cellWithStatus ${
            params.row.status === 0 ? "passive" : "active"
          }`}
        >
          {params.row.status === 0 ? "Unavailable" : "Active"}
        </div>
      )
    },
  },
]

export const brandColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "brand_name_en",
    headerName: "Brand Name En",
    width: 350,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.brand_name_en}
        </div>
      )
    },
  },
  {
    field: "brand_name_bn",
    headerName: "Brand Name Bn",
    width: 350,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.brand_name_bn}
        </div>
      )
    },
  },
]

export const categoryColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "category_name_en",
    headerName: "Category Name En",
    width: 350,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.category_name_en}
        </div>
      )
    },
  },
  {
    field: "category_name_bn",
    headerName: "Category Name Bn",
    width: 350,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.category_name_bn}
        </div>
      )
    },
  },
  {
    field: "category_icon",
    headerName: "Icon",
    width: 350,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          <i className={params.row.category_icon}></i>
        </div>
      )
    },
  },
]

export const subcategoryColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "subcategory_name_en",
    headerName: "Sub Category Name En",
    width: 350,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.subcategory_name_en}
        </div>
      )
    },
  },
  {
    field: "subcategory_name_bn",
    headerName: "Sub Category Name Bn",
    width: 350,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.subcategory_name_bn}
        </div>
      )
    },
  },
  {
    field: "category.category_name_en",
    headerName: "Category Name",
    width: 350,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.category?.category_name_en}
        </div>
      )
    },
  },
]

export const subsubcategoryColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "subsubcategory_name_en",
    headerName: "Sub Sub Category Name En",
    width: 350,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.subsubcategory_name_en}
        </div>
      )
    },
  },
  {
    field: "subsubcategory_name_bn",
    headerName: "Sub Sub Category Name Bn",
    width: 350,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.subsubcategory_name_bn}
        </div>
      )
    },
  },
  {
    field: "category_name_en",
    headerName: "Category Name",
    width: 350,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.category?.category_name_en}
        </div>
      )
    },
  },
  {
    field: "subcategory_name_en",
    headerName: "Sub Category Name ",
    width: 350,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.subcategory?.subcategory_name_en}
        </div>
      )
    },
  },
]

export const sliderColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 350,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src="https://themesfinity.com/wp-content/uploads/2018/02/default-placeholder.png"
            alt="avatar"
          />
          {params.row.title}
        </div>
      )
    },
  },
  {
    field: "description",
    headerName: "Description",
    width: 350,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.description}
        </div>
      )
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 330,
    renderCell: (params) => {
      return (
        <div
          className={`cellWithStatus ${
            params.row.status === 0 ? "passive" : "active"
          }`}
        >
          {params.row.status === 0 ? "Disabled" : "Active"}
        </div>
      )
    },
  },
]

export const couponColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "coupon_name",
    headerName: "Coupon Name",
    width: 200,
  },
  {
    field: "coupon_discount",
    headerName: "Coupon Discount (%)",
    width: 200,
  },
  {
    field: "coupon_validity",
    headerName: "Coupon Validity",
    width: 350,
  },
  {
    field: "status",
    headerName: "Status",
    width: 330,
    renderCell: (params) => {
      return (
        <div
          className={`cellWithStatus ${
            params.row.status === 0 ? "passive" : "active"
          }`}
        >
          {params.row.status === 0 ? "Invalid" : "Valid"}
        </div>
      )
    },
  },
]

export const shippingdivisionColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "division_name",
    headerName: "Division Name",
    width: 350,
  },
]

export const shippingstateColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "division.division_name",
    headerName: "Division Name",
    width: 350,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.division?.division_name}
        </div>
      )
    },
  },
  {
    field: "district.district_name",
    headerName: "State Name",
    width: 350,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.district?.district_name}
        </div>
      )
    },
  },
  {
    field: "state_name",
    headerName: "State Name",
    width: 350,
  },
]

export const shippingdistrictColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "division.division_name",
    headerName: "Division Name",
    width: 350,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.division?.division_name}
        </div>
      )
    },
  },

  {
    field: "district_name",
    headerName: "District Name",
    width: 350,
  },
]

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
]
