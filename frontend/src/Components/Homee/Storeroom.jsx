import React, { Component } from 'react'
import Topdeals from './Topdeals';
import './../Styles/Storeroom.css';
class Storeroom extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        offers : [
            {name:"Boruto Ham Burger", discount:"30%", item1:"Ham Burger", item2:"Cold Drink", item3:"Rasengan"},
            {name:"Naruto Ramen", discount:"10%", item1:"Ramen", item2:"Boiled Eggs", item3:"Rasenshuriken"},
            {name:"Asuma Stake", discount:"40%", item1:"Lamb Stack", item2:"Cold Drink", item3:"Chakra Blade"},
            {name:"Kakashi Pai", discount:"20%", item1:"Lamb Stack", item2:"Cold Drink", item3:"Chidori"}
          ]
     }
    render() { 
        return (
            <div className='py-5 cardii'>
                <h4 style={{display:"flex"}}>Best Seller</h4>
            <div  style={{display:"flex",justifyContent:"space-evenly"}}>
            {this.state.offers.map(offers => (
                <Topdeals DealName={offers.name} DealDiscount={offers.discount} DealItem1={offers.item1} DealItem2={offers.item2} DealItem3={offers.item3} />
            ))}
        </div>
        </div> 
        );
    }
}
 
export default Storeroom;