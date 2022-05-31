import React, { Component } from 'react';
import "../Styles/Header.css"
import { Link } from 'react-router-dom';
const Header = () => {
  return (
      <div className="Header">
        <div className="banner">
          <div className="banner__content">
            <div className="banner__text">
              <h3 >Ichiraku Ramen</h3>
              <h1 >Chef Teuchi</h1>
              <p >
                "I'm Teuchi! What I like is cooking ramen, especially the kind Naruto Likes"
              </p>
              <div className="banner__btn">
                <Link to="/menu" className="btn1 btn btn-smart text-light nav-link active">
                Itadakimasu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Header;
