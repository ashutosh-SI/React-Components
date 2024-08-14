import { useReducer } from "react";

const counterReducer = (state,action)=>{
    switch(action){
        case 'INCREMENT': return state+1
        case 'DECREMENT': return state-1
        case 'RESET': return 0
        default : return state;
    }

}
const Counter=()=>{
    let initialValue=100

    const[counter, dispatch]= useReducer(counterReducer, initialValue)

    return <>
    <h1 className="text-center m-2 p-2">Counter : {counter}</h1>
    <button className="btn btn-primary m-2 " onClick={()=>dispatch('INCREMENT')}>Increment</button>
    <button className="btn btn-secondary m-2"  onClick={()=>dispatch('DECREMENT')}>Decrement </button>
    <button className="btn btn-secondary m-2" onClick={()=>dispatch('RESET')}>Reset </button>

    </>

}
export default Counter