import React, {useState,useEffect,useReducer} from 'react'
const initialState={id:1, name:'John'}
function reducer(state,action) {
        switch(action.type){
            case 'incrementUserID':
                return {
                    ...state, id:state.id+1
                }
            default:return state
        }
}
const CounterFunctionContainer =()=>{
  /*const  [myState,setMyState]=useState({
      counter:0,
      myName:'Ramona'
  });*/

  const [counter, setCounter]=useState(0);
  const [name,setName]=useState('')
   useEffect(()=>{
      console.log(counter)
  }, [counter])
  const [user,dispatch]=useReducer(reducer,initialState)
  const increaseCounter=()=>{
      setCounter(counter+1)
  }
  const decreaseCounter=()=>{
    setCounter(counter-1)
}
    return (
        <div>
            <input placeholder={"type name..."} value={name} onChange={(event)=>setName(event.target.value)}></input>
            <p>Name is : {name}</p>
            Session 2 with Function 
            <p>Counter is : {counter} </p>
            <button onClick={increaseCounter}>Increase counter </button>
                <button onClick={decreaseCounter}>Decrease counter</button>
                <br/>
                <h1>{user.id}</h1>
                <button onClick={()=>dispatch({type:'incrementUserID'})}>user id </button>
        </div>
    )
}

export default CounterFunctionContainer