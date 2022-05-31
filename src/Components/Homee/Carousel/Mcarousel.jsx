import React, { Component } from "react";
import '../../Styles/Mcarousel.css';
import m1 from "../../../images/OfferImages/o1.jfif";
import m2 from "../../../images/OfferImages/o3.jfif";
import m3 from "../../../images/OfferImages/o4.jfif";
import m4 from "../../../images/OfferImages/o2.jfif";
import m5 from "../../../images/OfferImages/o3.jfif";
import { Carousel } from "bootstrap";
const Mcarousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <h3 className="carou_text">Hot Offers</h3>
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
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={m2} className="d-block w-100 " alt="..." />
        </div>
        <div className="carousel-item">
          <img src={m3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={m4} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={m5} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={m1} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Mcarousel;
