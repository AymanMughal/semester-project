import React, { Component } from "react";
import Header from "../Header/Header";
import "./Home.css";
import Pcarousel from "./../../Carousel/Pcarousel";
import Header2 from "./../Header2/Header2"


const Home = () => {
  return (
    <div className="chome">
      <div className="row ">
        <div className="col cheader">
          <Header />
        </div>
      </div>
      <div className="row carousel1 ">
        <div className="col-10  " id="homecarousel">
          <Pcarousel />
        </div>
      </div>

      <div className="row cheader2">
        <div className=" ">
          <Header2 />
        </div>
      </div>
    </div>
  );
};

export default Home;
