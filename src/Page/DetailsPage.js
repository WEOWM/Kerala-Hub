import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { feachShopDetails } from '../Store/Slice/Shop/CategoriesDeatailsSlice'
import { FecthSingleProducts } from '../Store/Slice/Shop/SingleProdutsSlice'


const DetailsPage = () => {

    const dispatch = useDispatch()

    const handleDetails = (e, id) => {
        e.preventDefault();
        dispatch(FecthSingleProducts({SingleProdutsID : id}))
 


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
            <div className="container-fluid   ">
                <div className="row">
                    {
                        ShopDetails.map((data) => {
                            return (
                                <div class="col-lg-3 card ca-rd mt-4  text-center commone-class"  >
                                    <img className='mt-4  ' src={data.images} alt="..." height="200px" />
                                    <div class="card-body">
                                        <h5 class="card-title">{data.title.substring(0, 20)}</h5>
                                        <p> {data.price}</p>
                                        <a class="btn btn-outline-dark " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => handleDetails(e, data.id)}>Buy pNow</a>
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