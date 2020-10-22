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

            <div class="col-lg-4 col-md-4 col-xs-4 thumb">

            <a class="thumbnail" href="#">
            <img class="img-responsive" src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/KEP_5941_copy_large.png?v=1601059583" alt=""></img>
            </a>

            </div>
            
            <div class="col-lg-4 col-md-4 col-xs-4 thumb">
            <a class="thumbnail" href="#">
            <img class="img-responsive" src="https://target.scene7.com/is/image/Target/GUEST_e9af61fc-9865-49a7-9df4-ac2de91426c8?wid=488&hei=488&fmt=pjpeg" alt=""></img>
            </a>

            </div>

            <div class="col-lg-4 col-md-4 col-xs-4 thumb">
            <a class="thumbnail" href="#">
            <img class="img-responsive" src="https://assets.privy.com/picture_photos/1264514/medium/059ad357b46148a782a81d5a1fe04e38?1576775194" alt=""></img>
            </a>

            </div>
            </div>
            

            </div>
            
            </div>
        )
    }
}
