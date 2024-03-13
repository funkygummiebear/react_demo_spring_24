import React, {Component} from "react";
import axios from 'axios';

class Body extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        //axios api call
        axios.get('https://xkcd.com/info.0.json')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevState)
        console.log(this.state)
        //function
    }

    render(){
        const increment = () => {
            this.setState({count: this.state.count + 1})
        }
        return(
            <div>
            <button type="button" className="btn btn-dark" onClick={increment}>
                {this.state.count}
            </button>
            </div> 
            )
    }
}

export default Body