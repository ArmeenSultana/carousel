import React from "react";
import { Carousel } from "react-bootstrap";
import SLIDE from "../assets/SLIDES.jpg";

const CauroselContainer = () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item active position-relative d-flex justify-content-center align-items-center "
            style={{
              height: "100vh",
              width: "100%",
            }}
          >
            {/* Setting Z-Index Because button is behind the image */}
            <img
              src={SLIDE}
              className="d-block w-100 position-absolute"
              alt="..."
              // style={{
              //   zIndex: "1",
              // }}
            />
            <button style={{zIndex: "1"}}className="btn btn-primary ">Jamal</button>
          </div>
          <div className="carousel-item">
            <img src={SLIDE} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={SLIDE} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default CauroselContainer;
