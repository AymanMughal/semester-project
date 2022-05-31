import React, { Component } from "react";
import "../Styles/Footer.css"
import logi from "../../images/ramen1.png";
import {BsFacebook,BsTwitter,BsInstagram,BsGithub} from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footi ">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top">
        <p className="col-md-4 mb-0 text-muted">&copy; 2021 Restaurant, Owned by AJ</p>
   
        <Link
          to="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <img className="logii" src={logi} alt="" />
        </Link>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-muted">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/list" className="nav-link px-2 text-muted">
              List
            </Link>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              About
            </a>
          </li>
        </ul>
        <ul className="social  col-md-4 justify-content-center">
          <li className="nav-item">
            <Link to="https://facebook.com" className="nav-link px-2 text-muted socialfooer">
              <BsFacebook />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="https://twitter.com" className="nav-link px-2 text-muted socialfooer">
              <BsTwitter  />
            </Link>
          </li>
          <li className="nav-item">
            <a href="https://instagram.com" className="nav-link px-2 text-muted socialfooer">
              <BsInstagram   />
            </a>
          </li>
          <li className="nav-item">
            <a href="https://github.com" className="nav-link px-2 text-muted socialfooer">
              <BsGithub  />
            </a>
          </li>
        </ul>
      </footer>
      
      
    </div>
  );
};

export default Footer;
