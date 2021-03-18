import React, { Component } from "react";

const Today=(props)=>{
       const date= new Date();
       return (<div>{date.toDateString()}
       <h3>Counter is : {props.counter}</h3>
       </div>)
}

class CounterClassContainer extends Component{
    state={
        counter:0
    }
    
   increaseCounter=()=>{
        this.setState({
            counter: this.state.counter +1
        })
    }
    decreaseCounter=()=>{
        this.setState({
            counter: this.state.counter -1
        })
    }
    render(){
        return(
            <React.Fragment>
             
            <div>Session 2 
            <div>Counter is : {this.state.counter}</div>
            
                <button onClick={this.increaseCounter}>Increase counter </button>
                <button onClick={this.decreaseCounter}>Decrease counter</button>
            </div>
            <Today counter={this.state.counter}/>
            </React.Fragment>
            
        )
    }
}
export default CounterClassContainer;