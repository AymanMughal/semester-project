import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Homee/Home"
import Menu from "./Components/NavbarComponents/Cart/Menu";
import SignUp from "./Components/NavbarComponents/Membership/SignUp";
import About from "./Components/NavbarComponents/About"
import Form1 from "./Components/NavbarComponents/Membership/Form"

import Navbar from "./Components/Homee/Navbar";
import Cart from "./Components/NavbarComponents/Cart/Cart";
import List from "./Components/NavbarComponents/Membership/List";
import Footer from "./Components/Homee/Footer";
import Checkout from "./Components/NavbarComponents/Cart/Checkout";
import Loginpage from "./Components/NavbarComponents/Membership/Loginpage";
import Header2 from "./Components/Homee/Header2";

function App() {

  const [show, setShow] = useState();
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !==-1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    
    cart[ind].amount += d;

    if (cart[ind].amount === 0) 
    cart[ind].amount = 1;
    setCart([...cart]);
  };

  var inputdata = []
  
  const [inputvalues, setinputvalues] = useState(inputdata);
  const previousdata = (values) => {
    setinputvalues((prev) => {
      return [...prev, values ];
      
    });   
  };
  return (
    <div className="App">
    
     
      <Navbar setShow={setShow} size={cart.length} />
      
      <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/menu" element={<Menu handleClick={handleClick} />}></Route>
          <Route exact path="/cart" element={<Cart  cart={cart} setCart={setCart}  handleChange={handleChange}/>}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>
          <Route exact path="/membership" element={<Loginpage />}></Route>
          <Route exact path="/signup" element={<SignUp Data_={previousdata} />}></Route>
         
          <Route exact path="/list" element={<List iv={inputvalues}/>}></Route> 
        </Routes>
       <  Footer className="appfooter"/>
    </div>
  );
}

export default App;
