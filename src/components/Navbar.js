import React, { Component } from 'react'
import logo from "../logo.jpg"
// import {VscAccount} from 'react-icons/vsc';
// import {AiOutlineShoppingCart} from 'react-icons/ai';
export default class Navbar extends Component {
    render() {
        return (
            <div className="NavbarComponent">
            <div className = 'discount'> Free Shipping On Orders Over $39! </div>
            <div className = 'navbar'> 
            {/**<div className="icons">
            <VscAccount size={32}/>
            <AiOutlineShoppingCart size={32}/>
        </div>*/}
            <span> Products </span>
            <span> Our Story </span>
            <span> Ingredients </span>
            <img className = 'logo' src ={logo} alt = 'logo'/>
            <span> Blog </span>
            <span> Find Us </span>
            </div>
            </div>
        )
    }
}