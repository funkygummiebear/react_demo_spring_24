import React, {Component} from "react";
import Nav from "./Nav";

class Body extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
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