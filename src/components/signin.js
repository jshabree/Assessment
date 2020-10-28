import React, { Component } from 'react'

export default class signin extends Component {
    state = {email: "", password: ""}
    handleChange = (e)=> {
        this.setState({[e.target.name] : e.target.value})
    }

     handleSubmit = async (e) => {
        e.preventDefault();
         const body = this.state;
let data;

let link1 = "https://partake-food-server.herokuapp.com/validateuser"
let link2 = "http://localhost:5000/validateuser"

    try {
          await fetch(link1, {
          method: "POST",
          body: JSON.stringify(body),
          headers: { "Content-Type": "application/json" },
        }).then( response => response.json())
        .then(info => data= info.message)
      } catch (error) {
        console.log(error);
      }
if(data === "user exist") {
    this.props.history.push("/home")
}
else {
    console.log("dataa", (data))
    alert((data))

}
    };
    render() {
        return (
            
            <form className="formm">
                <label  className="labelNames">Email</label>
                <input type = 'email' name= "email" value = {this.state.email} onChange = {this.handleChange}  placeholder="EMAIL"   className="InputValues"/>
                <label  className="labelNames">Password</label>
                <input type = 'password' name="password" value = {this.state.password} onChange = {this.handleChange}  placeholder="PASSWORD"   className="InputValues"/>
                <div className  = "buttonwrapper">
                <button type = 'submit' onClick={this.handleSubmit} className="button"> Log In </button>
                </div>
            </form>
        )
    }
}