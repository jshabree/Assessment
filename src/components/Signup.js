import React, { Component } from 'react';
export default class Signup extends Component { 
    state = {firstName: "", lastName: "", email: "", password: ""}
 
    handleChange = (e)=> {
        this.setState({[e.target.name] : e.target.value})
    }

     handleSubmit = async (e) => {
        e.preventDefault();
        const body = this.state;
     
        let link1 = "https://partake-food-server.herokuapp.com/adduser"
        let link2 = "http://localhost:5000/adduser"

    try {
        const data = await fetch(link1, {
          method: "POST",
          body: JSON.stringify(body),
          headers: { "Content-Type": "application/json" },
        });
        console.log("data", data);
      } catch (error) {
        console.log(error);
      }

    };

    render() {
        return ( 
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
                <button type = 'submit' onClick={this.handleSubmit} className="button">Create</button>
                </div>
            </form>
            
        )
    }
}