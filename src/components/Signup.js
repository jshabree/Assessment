import React, { Component } from 'react'

export default class Signup extends Component { 
    state = {firstName: "", lastName: "", email: "", password: ""}
    handleChange = (e)=> {
        this.setState({[e.target.name] : e.target.value})
    }
    render() {
        return ( 
            <div className = 'signup'>
            <h2 className = 'heading'> Create Account </h2>

            <div className = "slider">

            <span className = "slider1"> Sign In </span>
            <span className = "slider2"> Sign Up </span>


            </div>


            <form className="formm">

            <div className="inline">
            <div className="sameline">
                <label className="labelNames">First Name</label>
                <input type = 'text' name="firstName" value = {this.state.firstName} onChange = {this.handleChange} placeholder="FIRST NAME" className="InputValues"/>
                </div>
                <div >
                <label  className="labelNames">Last Name</label>
                <input type = 'text' name="lastName"value = {this.state.lastName} onChange = {this.handleChange} placeholder="LAST NAME"  className="InputValues"/>
                </div>
                </div>
              
                <label  className="labelNames">Email</label>
                <input type = 'email' name= "email" value = {this.state.email} onChange = {this.handleChange}  placeholder="EMAIL"   className="InputValues"/>
                <label  className="labelNames">Password</label>
                <input type = 'password' name="password" value = {this.state.password} onChange = {this.handleChange}  placeholder="PASSWORD"   className="InputValues"/>
                <div className  = "buttonwrapper">
                <button type = 'submit' className="button">Create</button>
                </div>
            </form>

            </div>
        )
    }
}
