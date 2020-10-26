import React, { Component } from 'react'
// import { Col, Row, Container } from 'react-bootstrap'

export default class home extends Component {
    render() {
        return (
            <div>

            <div className = 'a' style = {{textAlign: "left", marginTop: "150px" }}>

            <h1 className = 'sidedebarHeading'> Super Delicious Cookies </h1>
            <p className = 'midHeading'> that are also gluten free, vegan & allergy-friendly</p>
            <button className = 'lowButton' >Shop Now</button>

            </div>

            <div class = "container-fluid">
            <div class="row">
            
            <div class="single-grid col-12 col-md-4">
            <a href ="#" class = "navigate">

            <div class = "outer">

            <div class ="first">
            
            <h2> Crunchy Cookies </h2>
            <div class = "shop"> Shop</div>


            </div>

          {/*  <img src ="/images/Birthday_cake.png" class = "img-responsive" alt = "Crunchy cookies"/>*/}
          {/*  <img src={require('.../')} 
            onMouseOver={this.src = require('/images/Birthday_cake.png')}
            onMouseOut={this.src = require('/images/Choco_chip.png')} alt = ""/>*/}

            <div style = {styles}>
            <img 
            src = {this.state.img}
            onMouseEnter = {() => {
                this.setState({
                    img : "/images/Birthday_cake.png"
                })
            }}

            onMouseOut = {() => {
                this.setState({
                    img :"/images/Choco_chip.png"
                })
            }}
            </div>
            </div>
            
            </a>

            </div>


            <div class="single-grid col-12 col-md-4">
            <a href ="#" class = "navigate">

            <div class = "outer">

            <div class ="first">
            
            <h2> Soft baked cookies </h2>
            <div class = "shop"> Shop</div>


            </div>

            <img src ="/images/Pumpkin_spice.png" class = "img-responsive" alt = "Soft baked cookies "/>
            </div>
            
            </a>

            </div>
            
            <div class="single-grid col-12 col-md-4">
            <a href ="#" class = "navigate">

            <div class = "outer">

            <div class ="first">
            
            <h2> Variety packs </h2>
            <div class = "shop"> Shop</div>


            </div>

            <img src ="/images/Variety_1.png" class = "img-responsive" alt = " Variety packs "/>

            </div>
            
            </a>

            </div>

            </div>

            </div>
            </div>
            
        )
    }
}
