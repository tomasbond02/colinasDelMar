import React from 'react'

function Carousel() {
    return (
        <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel" align="center">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="cuartoPax4.jpg" class="img-fluid" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="comedorPax4.jpg" class="img-fluid" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="estaiconamiento.jpg" class="img-fluid" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="patioPax6.jpg" class="img-fluid" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>

        </div>
    )
}

export default Carousel