import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Head.css"

const Head = () => {
    return (
        <>
            <div className="head">
                <div className="logo ms-4">
                    <span >Kerala</span>
                    <span >Hub</span>
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
                    <li>
                        <NavLink>Cart</NavLink>
                    </li>

                </div>
            </div>
            <div className="mobile-Head">
                <div className="mobile-logo ms-3">
                    <span>Kerela</span>
                    <span>Hub</span>
                </div>
                <div className="mobile-nav me-3">
                    <i class="fa-solid fa-bars fa-2x" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></i>

                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 id="offcanvasRightLabel"></h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
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
                            <li>
                                <NavLink>Other</NavLink>
                            </li>
                        </div>
                    </div>
                </div>
            </div>






        </>
    )
}

export default Head