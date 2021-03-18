import React from 'react';

/*const ButtonProps =(props)=>{
    return(
        <h1>{props.name}</h1>
    )
}*/

class ButtonProps extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:'Text button'
        }
      //this.changeName=this.changeName.bind(this);
    }
    changeName(){
        this.setState({
            value:'text 2'
        })
    }
    componentWillUnmount(){
        console.log('unmount')
    }
    render(){
        return(
            <button onClick={()=>this.props.handleButton()}>
                {this.state.value}
            </button>
        )
    }
}
export default ButtonProps;