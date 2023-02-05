import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { feachShopDetails } from '../Store/Slice/Shop/CategoriesDeatailsSlice'
import { FecthSingleProducts } from '../Store/Slice/Shop/SingleProdutsSlice'


const DetailsPage = () => {

    const dispatch = useDispatch()

    const handleDetails = (e, id) => {
        e.preventDefault();
        dispatch(FecthSingleProducts({ SingleProdutsID: id }))



    }
    const navigate = useNavigate()
    const { id } = useParams()
    console.log("p-id:", id);

    const dispach = useDispatch()

    useEffect(() => {

        dispach(feachShopDetails({ DetailsID: id }))

    }, [])

    const { ShopDetails } = useSelector((state) => state.detailsSlice)

    console.log("data::::", ShopDetails);
    return (
        <div>
           

            <div className="container-fulid ">
                <div className="row p-0 m-0">
                    {
                        ShopDetails.map((data, index) => {
                            return (
                                <div className="card-d col-md-3 mb-4 pb-1" key={data.id}>
                                    <div className="card h-100 text-center p-4">
                                        <img src={data.images} className="card-img-top w-100" alt="" height='180px' />
                                        <div className="card-body ">
                                            <h5 className="card-title ">{data.description.substring(0, 12)}..</h5>
                                            <p className="card-text lead fw-bold"> ₹ {data.price}</p>
                                            <a class="btn btn-outline-dark " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => handleDetails(e, data.id)}>Buy Now</a>                                        </div>
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

export default DetailsPage