import React, { Component } from 'react'
import Signup from './Signup'
import Signin from './signin'
// import { Link } from 'react-router-dom';

export default class Userform extends Component {

    state={value: true};


    render() {

        
        return (
            <div className = 'signup'>

            <h2 className = 'heading'>  {this.state.value ? "Customer Login" :   "Create Account"}</h2>

            <div className = "slider">

            <span className ={ this.state.value? "slider2": "slider1"}  onClick={()=> this.setState({value: true})}> Sign In </span>

            <span className ={ this.state.value? "slider1": "slider2"}  onClick={()=> this.setState({value: false})}> Sign Up </span>

            </div>      
            {this.state.value ?  <Signin   {...this.props}/> :  <Signup  {...this.props}/>}
            </div>
        )
    }
}