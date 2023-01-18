import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { FeachCateogoriesList } from '../../../Store/Slice/Shop/CateogoriesListSlice'
import "./Categories.css"

const Categories = () => {

  const dispach = useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    dispach(FeachCateogoriesList())
    
  }, [])
  const handleDetailing = (e,id) =>{
    e.preventDefault();
    
    // navigate(`/details/:id`)
    navigate(`/details/${id}`)

   
  }

  const { CateogoriesList } = useSelector((state) => state.CateogoriesListSlice)
  

  return (
    <>

      <div className="container">
        <div className="row">
          {
            CateogoriesList.map((data, index) => {
              return (

                <div className="col-lg-2 col-6 text-center">
                  <div className="categori-card mt-2">
                    <img onClick={(e)=>handleDetailing(e,data.id)} className='categor-img' src={data.image} alt="" />
                    <h5> {data.name}</h5>
                  </div>
                </div>

              )
            })
          }
        </div>
      </div>

      <div className="text-add text-center mt-4">
        <h2>Featured Products</h2>
        <p>Summer Collection New Morden design</p>
      </div>

    </>
  )
}

export default Categories