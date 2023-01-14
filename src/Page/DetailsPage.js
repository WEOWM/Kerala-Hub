import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { feachShopDetails } from '../Store/Slice/Shop/CategoriesDeatailsSlice'

const DetailsPage = () => {
    const {id} = useParams()

    console.log("p-id:", id);

    const dispach = useDispatch()

    useEffect(() => {

        dispach(feachShopDetails({DetailsID:id}))

    }, [])

    const { ShopDetails } = useSelector((state) => state.detailsSlice)

    console.log("data::::", ShopDetails);
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    {
                        ShopDetails.map((data) => {
                            return (
                                <div class="col-lg-2">
                                    <img src={data.images[0]} class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                            <p class="card-title">{data.title}</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
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