import React from 'react'
import './Footer.css'

const Footer = () => {
  const footData = [
    {
      head: "Link",
      item1: "Abouts Us",
      item2: "Countact Us",
      item3: "Blog",
      item4: "FAQ,s",
    },
    {
      head: "Policies",
      item1: "teams & Condition",
      item2: "Cookies Policy",
      item3: "Data Policy",
    },
    {
      head: "Abouts Shoping Hub",
      item1: "Commpany info",
      item2: "Branches",
      item3: "Store",
    },
    {
      head: "Contact",
      item1: <i className='fa-solid fa-phone' >+652147892</i>,
      item2: <i className='fa-solid fa-message'>into@shophup.com</i>,
     

    },
  ]
  return (
    <div>
      <div className="footer mt-5">
        <div className="container">
          <div className="row">
            {
              footData.map((data) => {
                return (


                  <div className="col-md-3 col-12  mt-4" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                    <li>{data.head}</li>
                    <li>{data.item1}</li>
                    <li>{data.item2}</li>
                    <li>{data.item3}</li>
                    <li>{data.item4}</li>
                    <li>{data.iconPhone} </li>
                    <li>{data.iconPhone} </li>
                  </div>

                )
              })
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer