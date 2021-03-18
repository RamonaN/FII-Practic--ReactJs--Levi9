import React from 'react';
import './styles/App.scss';
import CloseButton from './containers/CloseButton';
import ButtonProps from './containers/ButtonProps';
import CounterClassContainer from './containers/CounterClassContainer';
import CounterFunctionContainer from './containers/CounterFunctionContainer';
import Title from './components/Title';
import Header from './containers/Header';
import SideNav from './containers/SideNav';
import MainContent from './containers/MainContent';
 /*class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:'Ramona',
      isOn:true
    }
  }
  componentDidMount(){
    console.log(this.state.name)
    this.setState({
      name:'john'
    })
   
  }
   handleButton=()=>{
     this.setState({
       isOn:!this.state.isOn
     })
     
   }
  //shouldComponentUpdate(nextProps,nextState){
    //if(this.state.name!==nextState.name){
     //return true;
    //}
    //return false;
  //}
  
 
  render(){
    console.log('rerender')
    return (
      <div className="App">
        <h1>You rock , {this.state.name}!</h1>
        <CloseButton/>
        {this.state.isOn ?  
        <ButtonProps handleButton = {this.handleButton} name={this.state.name}></ButtonProps> : null}
      <CounterClassContainer/>
      <CounterFunctionContainer/>
      </div>
    );
    }
 <Title title="My app"></Title>
} */
const App=()=>{
  return(
    <div className="app">
      <Header/>
      <MainContent/>
  
    </div>
    
  )

}


export default App;
