import React, { Component } from "react";
import Header from "./Header";
import "../Styles/Home.css"
import Mcarousel from "./Carousel/Mcarousel";
import Pcarousel from "./Carousel/Pcarousel";
import Storeroom from "./Storeroom"
import Header2 from "./Header2";


const Home = () => {
  return (
    <div className="chome">
      
      <div className="row ">
        <div className="col cheader">
          <Header />
        </div>
      </div>
      <div className="row carousel1 ">
        <div className="col ccarousel">
          <Pcarousel />
        </div>
        <div className="col ccarousel">
          <Mcarousel />
        </div>
      </div>
      
        <div className="row">
          <div className="col cheader2">
          <Header2 />
          
        </div>
        
      </div>
      
      </div>
  );
};

export default Home;
