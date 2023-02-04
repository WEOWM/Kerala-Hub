import React from 'react'
import {  useSelector } from 'react-redux'

import { useCart } from 'react-use-cart'

import { notifySuccess } from '../../utils/tost'

const Popup = () => {
    const { addItem } = useCart();
    const { singleproduts } = useSelector((state) => state.singleSlice)

    const AddtToCart = () =>{
        addItem(singleproduts)
        notifySuccess("Product Added Your Cart")
    }
    

    console.log("cartDdata.....", singleproduts);
    return (

        <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
            <div className='modal-dialog modal-dialog-centered modal-lg' id="exampleModal" >


                <div class="container-xl rounded-5 overflow-hidden modal-content" style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}>

                    <div class="row  mt-5 mb-5 rounded-3 justify-content-center">
                        <div class="col-12 col-sm-12 col-md-9 col-lg-7 col-xl-6 d-none d-xl-block p-0 bg-white">
                            <img class="img-fluid h-100" src={singleproduts.images} alt="" />
                        </div>
                        <div class="col-12 col-sm-11 col-md-8 col-lg-7 col-xl-6 d-xl-none p-0 bg-white">
                            <img class="img-fluid h-100" src={singleproduts.images} alt="" />
                        </div>


                        <div class="col-12 col-sm-11 col-md-8 col-lg-7 col-xl-6   bg-white holder ">
                            <div class="row  w-auto mt-2 gy-5 cat-hold">
                                <p class=" col-12 " style={{ fontWeight: "bold", fontSize: '2em', color: 'hsl(228, 12%, 48%)' }}>{singleproduts.title}</p>
                            </div>

                            <div class="row gy-5">
                                <div class="col-12">
                                    <p class="p-desc" style={{ fontSize: "1em" }}>{singleproduts.description}</p>
                                </div>

                            </div>
                            <div class="row gy-5">
                                <div className="prdct-qty-container">
                                    <button
                                        className="prdct-qty-btn"
                                        type="button"
                                    //   onClick={() => decreaseQuantity(index)}
                                    >
                                        <i className="fa fa-minus"></i>
                                    </button>
                                    <input
                                        type="text"
                                        name="qty"
                                        className="qty-input-box"
                                        value="0"
                                        disabled
                                    />
                                    <button
                                        className="prdct-qty-btn"
                                        type="button"
                                    //   onClick={() => increaseQuantity(index)}
                                    >
                                        <i className="fa fa-plus"></i>
                                    </button>
                                    <p class=" ms-5" style={{ color: '#3E7E66' }} >Price : ₹{singleproduts.price}</p>
                                </div>
                                {/* <div class=" col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-7">
                                    
                                </div> */}

                            </div>
                            <div class="row pt-3" >
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <button type="button" onClick={() => AddtToCart()} class="btn btn-outline-dark  rounded-3 col-12 h-75">
                                        <p class="cart-button">
                                            <i class="fa-solid fa-cart-shopping me-3" ></i> Add to Cart</p>
                                    </button>

                                </div>
                                

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>



    )
}
export default Popup



