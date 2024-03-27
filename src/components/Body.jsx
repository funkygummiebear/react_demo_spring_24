import React, {Component} from "react";
import axios from 'axios';

class Body extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            coffee: {}
        }
    }

    componentDidMount(){
        //axios api call
        axios.get(' "https://api.nasa.gov/planetary/apod?api_key=${apiKey}";')
        .then((response) => {
            this.setState({coffee: response.data})
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log(prevState)
    //     console.log(this.state)
    //     //function
    // }

    render(){
        const {coffee} = this.state
        const increment = () => {
            this.setState({count: this.state.count + 1})
        }
        return(
            <div>
            <button type="button" className="btn btn-dark" onClick={increment}>
                {this.state.count}
            </button>
            <p>
            {coffee.blend_name}
            </p>
            </div> 
            )
    }
}

export default Body