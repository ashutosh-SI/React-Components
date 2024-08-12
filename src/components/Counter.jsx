import { useState } from "react";

export default function Counter(){
    // let count = 0;
    const [count, setCount]=useState(0);


    const increment= ()=>{
        setCount(count+1)
        console.log("Count value:" + count)
    }
    return(
        <>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        </>
        
    )
}