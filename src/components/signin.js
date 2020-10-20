import React, { Component } from 'react'

export default class signin extends Component {
    state = {email: "", password: ""}
    handleChange = (e)=> {
        this.setState({[e.target.name] : e.target.value})
    }

     handleSubmit = async (e) => {
        e.preventDefault();
        // const body = this.state;
     this.props.history.push("/home")

    // try {
    //     const data = await fetch("http://localhost:5000/adduser/", {
    //       method: "POST",
    //       body: JSON.stringify(body),
    //       headers: { "Content-Type": "application/json" },
    //     });
    //     console.log("data", data);
    //   } catch (error) {
    //     console.log(error);
    //   }
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
