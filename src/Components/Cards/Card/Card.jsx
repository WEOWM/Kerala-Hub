import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FeacthDetailsRandom } from '../../../Store/Slice/Shop/RondamDetailSlice'
import { FecthSingleProducts } from '../../../Store/Slice/Shop/SingleProdutsSlice'
import "./Card.css"

const Card = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()







    const singproduts = (e, id) => {
        e.preventDefault();
        // navigate(`/singe/${id}`)
        console.log("card:id", id);


    }




    const BuyNow = (id) => {
        dispatch(FecthSingleProducts({ SingleProdutsID: id }))

    }


    useEffect(() => {
        dispatch(FeacthDetailsRandom())

    }, [])



    const { RandomDtails } = useSelector((state) => state.RandomDetailsSlice)


    return (
        <div>
           
            <div className="container-fulid ">
                <div className="row p-0 m-0">
                    {
                        RandomDtails.map((data, index) => {
                            return (
                                <div className="card-d col-md-3 mb-4 pb-1" key={data.id}>
                                    <div className="card h-100 text-center p-4">
                                        <img src={data.images} className="card-img-top w-100" alt="" height='180px' />
                                        <div className="card-body ">
                                            <h5 className="card-title ">{data.description.substring(0, 12)}..</h5>
                                            <p className="card-text lead fw-bold"> ₹ {data.price}</p>
                                            <a class="btn btn-outline-dark " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => BuyNow(data.id)}>Add To Cart</a>                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Card