import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Head.css"

const Head = () => {
    return (
        <>
            <div className="head">
                <div className="logo ms-5">
                    <span >Kerala</span>
                    <span >Hub</span>
                </div>
                <div className="nav-bar me-5">
                    <li>
                        <NavLink>Home</NavLink>
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
                    <li>
                        <NavLink>Other</NavLink>
                    </li>
                    
                </div>
            </div>


        </>
    )
}

export default Head