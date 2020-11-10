import React, { Component } from 'react'

export default class posts extends Component {


    state = {
        data: [],
    }

     componentDidMount=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }).then( response => response.json())
          .then(info => this.setState({data: info}))
    }



    getPosts=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }).then( response => response.json())
          .then(info => this.setState({data: info}))
    }

    
    render() {
        console.log("data:", this.state.data)
        return (
            <div style={{marginTop: "150px"}}>

            {  <button onClick={this.getPosts}>Get All Posts</button>
        }

            { this.state.data.length> 0 ?
                this.state.data.map(item => <div> <h2>Title: {item.title}</h2> <p>Body: {item.body}</p></div>): "No data fetched"}
                
            </div>
        )
    }
}
