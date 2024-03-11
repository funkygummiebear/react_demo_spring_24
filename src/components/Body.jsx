import React, {Component} from "react";

class Body extends Component{
    super(props){
        this.state = {
            count: 0
        }
    }

    render(){
        const increment = () => {
            this.setState({count: this.state.count + 1})
        }
        return(
            <React.Fragment>
            <button type="button" className="btn btn-dark" onClick={increment}>
                {this.state.count}
            </button>
            <Nav count={this.state.count} incrementFunc={increment}/>
            </React.Fragment>
        )
    }
}