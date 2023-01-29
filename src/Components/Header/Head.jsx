import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Head.css"

const Head = () => {

    return (
        <>
            <div className="head">
                <div className="logo ms-4">
                    <h2>ok bei..................</h2>
                </div>
                <div className="nav-bar me-4">
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink>Clothes</NavLink>
                    </li>
                    <li>
                        <NavLink>Electronics</NavLink>
                    </li>
                    <li>
                        <NavLink>Furniture</NavLink>
                    </li>
                    <li>
                        <NavLink>Shoes</NavLink>
                    </li>
                    <NavLink to="/cart">

                        <i class="fa-solid fa-cart-shopping"  ></i>
                        <span className='cr' > 0</span>
                    </NavLink>


                </div>
            </div><div className="mobile-screen">
                <div className="logo">
                    <h2>Kerala Hub</h2>
                </div>
                <div className="mob-nav">
                    <NavLink to={"/"}><i class="fa-solid fa-house"></i></NavLink>
                    <i class="fa-solid fa-shirt"></i>
                    <i class="fa-solid fa-shoe-prints"></i>
                    <i class="fa-regular fa-clock"></i>
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
            </div>







        </>
    )
}

export default Head