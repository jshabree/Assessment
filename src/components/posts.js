import React, { Component } from 'react';
import { connect } from "react-redux";
import getData from "../redux/actions/index";

class posts extends Component {


    state = {
        data: [],
    }

    //  componentDidMount=()=>{
    //     fetch("https://jsonplaceholder.typicode.com/posts", {
    //         method: "GET",
    //         headers: { "Content-Type": "application/json" },
    //       }).then( response => response.json())
    //       .then(info => this.setState({data: info}))
    // }

    componentDidMount = () => {
        this.props.dispatch(getData());
    };



    // getPosts=()=>{
    //     fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
    //         method: "GET",
    //         headers: { "Content-Type": "application/json" },
    //       }).then( response => response.json())
    //       .then(info => this.setState({data: info}))
    // }


    render() {
        console.log("data:", this.state.data)
        return (
            <div style={{marginTop: "150px"}}>

            <button onClick={this.getPosts}> Display first 5 sets of data </button> 

            { 
                this.state.data.length> 0 ?
                this.state.data.map(item => 
                    <div> 
                        <h2> {item.title} </h2> 
                        <p> {item.body} </p>
                    </div>): "No data fetched" 
            }
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        result: state.data
    };
};

export default connect(mapStateToProps)(posts);