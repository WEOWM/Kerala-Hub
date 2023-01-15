import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { feachShopDetails } from '../Store/Slice/Shop/CategoriesDeatailsSlice'

const DetailsPage = () => {
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
            <div className="container-fluid   ">
                <div className="row">
                    {
                        ShopDetails.map((data) => {
                            return (
                                <div class="col-lg-3 card ca-rd mt-4  text-center"  >
                                    <img className='mt-4  ' src={data.images} alt="..." height="200px" />
                                    <div class="card-body">
                                        <h5 class="card-title">{data.title.substring(0, 20)}</h5>
                                        <p> ${data.price}</p>
                                        <a href="#" class="btn btn-outline-dark ">Buy Now</a>
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