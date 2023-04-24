import React from "react";

export const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" style={{ background: "transparent", marginTop: 10, marginBottom: 10 }}>
                    <div className="carousel-item active">
                        <img
                            src="https://res.cloudinary.com/dwavbmsb2/image/upload/v1681347077/Dise%C3%B1o_sin_t%C3%ADtulo_4_da8x9r.png"
                            style={{ height: 200, objectFit: "contain" }}
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://res.cloudinary.com/dwavbmsb2/image/upload/v1681347077/Dise%C3%B1o_sin_t%C3%ADtulo_4_da8x9r.png"
                            style={{ height: 200, objectFit: "contain" }}
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://res.cloudinary.com/dwavbmsb2/image/upload/v1681347077/Dise%C3%B1o_sin_t%C3%ADtulo_4_da8x9r.png"
                            style={{ height: 200, objectFit: "contain" }}
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <div className="carousel-control-prev-icon" aria-hidden="true"></div>
                    <div className="visually-hidden">Previous</div>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <div className="carousel-control-next-icon" aria-hidden="true"></div>
                    <div className="visually-hidden">Next</div>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
