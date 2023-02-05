import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart';
import "./Head.css"

const Head = () => {

    const {items}= useCart();

    return (
        <>
            <div className="head">
                <div className="logo ms-4">
                    <h2>Kerala Hub</h2>
                </div>
                <div className="nav-bar me-4">
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink>Abouts</NavLink>
                    </li>
                    <li>
                        <NavLink>Help</NavLink>
                    </li>
                    <li>
                        <NavLink>Offer</NavLink>
                    </li>
                    <NavLink to="/cart">

                        <i class="fa-solid fa-cart-shopping"  ></i>
                        <span className='cr'>{items.length > 0 ? `${items.length}` : ""}</span>
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
                    <NavLink to={"/cart"}><i class="fa-solid fa-cart-shopping"></i></NavLink>
                </div>
            </div>







        </>
    )
}

export default Head