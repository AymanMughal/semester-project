import React, { Component } from "react";
import { Link } from "react-router-dom";
import logi from "../../images/logo.png";
import "./../Styles/Topdeals.css";
class Topdeals extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
  
      <div className="card  " style={{ width: "18rem", height:"25rem" }}>
        <img src={logi} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {this.props.DealName}</h5>
          <p className="card-text">Discount:{this.props.DealDiscount}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Item1:{this.props.DealItem1}</li>
          <li className="list-group-item">Item2:{this.props.DealItem2}</li>
          <li className="list-group-item">Item3:{this.props.DealItem3}</li>
        </ul>

        <div className="card-body">
         <Link to="/cart"><button  className="btn btn-primary bg-success">
            Add to Cart
          </button></Link> 
          
        </div>
      </div>
    );
  }
}

export default Topdeals;
