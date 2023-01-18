import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FeacthDetailsRandom } from '../../../Store/Slice/Shop/RondamDetailSlice'
import "./Card.css"

const Card = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const singproduts = (e, id) => {
        e.preventDefault();
        navigate(`/singe/${id}`)
        console.log("card:id",id);


    }


    useEffect(() => {
        dispatch(FeacthDetailsRandom())

    }, [])

    const { RandomDtails } = useSelector((state) => state.RandomDetailsSlice)
    console.log("eeasd:", RandomDtails);

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        RandomDtails.map((data, index) => {
                            return (

                                <div class="col-lg-3 card ca-rd mt-4  text-center"  >
                                    <img className='mt-4  ' src={data.images} alt="..." height="200px" />
                                    <div class="card-body">
                                        <h5 class="card-title">{data.title.substring(0, 20)}</h5>
                                        <p> ${data.price}</p>
                                        <a  class="btn btn-outline-dark " onClick={(e) => singproduts(e, data.id)}>Buy a Now</a>
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