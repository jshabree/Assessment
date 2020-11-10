import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import Userform from "./components/Userform"
import Navbar from "./components/Navbar"
import Home from './components/home';
import Posts from "./components/posts"
// import signin from './components/signin';
// import Signup from './components/Signup';

 class routes extends Component {
    render() {
        return (
            <Router>
            <Navbar />]
            <Switch>
            <Route exact path="/"  render={(props) => <Userform  {...props}/>} />
            <Route exact path="/home" render={(props) => <Home {...props}/>} />
            <Route exact path="/posts"  render={(props) => <Posts  {...props}/>} />

            </Switch>
          </Router>
        )
    }
}


export default (routes);