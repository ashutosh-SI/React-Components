import { useEffect, useState } from "react"

const Counter = ()=>{
    const[counter,setCounter]=useState(0)
    
    useEffect(()=>{
        setCounter(counter+1)
        console.log(`Counter ${counter}`)
    },[])

    return  <>
    <h1>Counter: {counter}</h1>
    </>
}

export default Counter;