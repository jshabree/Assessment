import React, { Component } from 'react';
import { connect } from "react-redux";
import { getData } from "../redux/actions/index";

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
        // this.props.dispatch(getData());
    };

    componentDidUpdate(newProps, prevState) {
        if (newProps.result !== prevState.data) {
          this.setState({data: newProps.result})
        }
      }

    getPosts=()=>{

        this.props.dispatch(getData());

        // fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
        //     method: "GET",
        //     headers: { "Content-Type": "application/json" },
        //   }).then( response => response.json())
        //   .then(info => this.setState({data: info}))
    }


    render() {
        console.log("data:", this.state.data)
        return (
            <div style={{marginTop: "150px"}}>

             <button onClick={this.getPosts}> Display first 5 sets of data </button> 
        

            { 
                this.state.data.length> 0 ?
                this.state.data.map(item => 
                    <div> 
                        <hr/>
                        <h2> {item.title} </h2> 
                        <p> {item.body} </p>
                    </div>
                    ):
                    <div>
                        <hr/>
                            No data fetched yet
                    </div>    
            }
                
             </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        result: state.getData.data
    };
};

export default connect(mapStateToProps)(posts);