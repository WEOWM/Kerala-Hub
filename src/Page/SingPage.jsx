import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FecthSingleProducts } from '../Store/Slice/Shop/SingleProdutsSlice'
import "./Single.css"

const SingPage = () => {

    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(FecthSingleProducts({ SingleProdutsID: id }))
    }, [])

    const { singleproduts } = useSelector((state) => state.singleSlice)

    console.log("tes::", singleproduts);
    return (
        <div className="container-fluid">
            <div className="row mt-5 ">
                <div className="left  col-md-6 " >
                    <img className='w-100' src={singleproduts.images} alt="" />
                </div>
                <div className="right col-md-6 col-sm-12 mt-5" style={{display: "flex",alignItems: "flex-start", flexDirection: "column",justifyContent: "center", }} >
                    <div>
                        <h2>{singleproduts.title}</h2>
                        <h4>{singleproduts.price}</h4>
                        <p>{singleproduts.description}</p>
                        <a class="btn btn-outline-dark " >Go to Cart</a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingPage