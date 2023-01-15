import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FeacthDetailsRandom } from '../../../Store/Slice/Shop/RondamDetailSlice'
import "./Card.css"

const Card = () => {
    const dispatch = useDispatch()


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

                                <div class="col-lg-3 card ca-rd mt-3  "  >
                                    <img className='mt-3 ' src={data.images} class="card-img-top" alt="..." height="200px"  />
                                    <div class="card-body">
                                        <h5 class="card-title">{data.title}</h5>
                                        <p> ${data.price}</p>
                                        <a href="#" class="btn btn-outline-dark">Buy Now</a>
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