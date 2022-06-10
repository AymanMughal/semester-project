import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Homee/Home/Home"
import Menu from "./Components/Menu/Menu/Menu"
import About from "./Components/About/About"
import Navbar from "./Components/Homee/Navbar/Navbar";
import Cart from "./Components/Cart/Cart/Cart";
import List from "./Components/List/List";
import Footer from "./Components/Homee/Footer/Footer";
import Checkout from "./Components/Cart/Checkout/Checkout";
import Loginpage from "./Components/LoginSignup/Loginpage/Loginpage";
import Form from "./Components/LoginSignup/Form/Form";
import Menuadmin from "./Components/Menuadmin/Menuadmin"

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


  return (
    <div className="App">
    
     
      <Navbar setShow={setShow} size={cart.length} />
      <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/menu" element={<Menu handleClick={handleClick} />}></Route>
          <Route exact path="/cart" element={<Cart  cart={cart} setCart={setCart}  handleChange={handleChange}/>}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/membership" element={<Loginpage />}></Route>
          <Route exact path="/signup" element={<Form/>}></Route>
          <Route exact path="/list" element={<List/>}></Route> 
          <Route exact path="/menuadmin" element={<Menuadmin/>}></Route> 

        </Routes>
       <  Footer className="appfooter"/>
    </div>
  );
}

export default App;
