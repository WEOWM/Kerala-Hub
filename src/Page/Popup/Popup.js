import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FecthSingleProducts } from '../../Store/Slice/Shop/SingleProdutsSlice'

const Popup = () => {

    // const dispatch = useDispatch()
    // const { id } = useParams()

    // useEffect(() => {
    //     dispatch(FecthSingleProducts({ SingleProdutsID: id }))
    // }, [])

    const { singleproduts } = useSelector((state) => state.singleSlice)
    return (
        <div>

            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button> */}


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className='modal-dialog modal-dialog-centered'>
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <div className='im'>
                                    <img className='w-100' src={singleproduts.images} alt="" />
                                </div>
                                <div className='im me-5 ms-5' >
                                    <p>{singleproduts.title}</p>
                                    <h4>{singleproduts.price}</h4>
                                    <a href='/cart' class="btn btn-outline-dark " >Go to Cart</a>

                                </div>
                            </div>
                        </div>
                        <div class="modal-footer" style={{ display: "flex", justifyItems: "center", alignItems: "center" }}>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Remove</button>
                            <button type="button" class="btn btn-success">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup