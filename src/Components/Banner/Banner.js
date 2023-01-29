import React from 'react'

const Banner = () => {
    return (
        <>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="image/b1.jpg" class="d-block w-100 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="image/b2 (2).jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="image/b3.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
                
            </div>

        </>
    )
}

export default Banner