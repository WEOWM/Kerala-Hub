import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FeacthDetailsRandom } from '../../../Store/Slice/Shop/RondamDetailSlice'

const Card = () => {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(FeacthDetailsRandom())

    }, [])

    const { RandomDtails } = useSelector((state) => state.RandomDetailsSlice)
    console.log("eeasd:", RandomDtails);

    return (
        <div>
            {
                RandomDtails.map((data, index) => {
                    return (

                        <div class="col-lg-6" >
                            <img src={data.images} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card