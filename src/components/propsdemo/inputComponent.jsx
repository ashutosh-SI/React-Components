import { useState } from "react"
import DisplayComponent from "./DisplayComponent";

const InputComponent= ()=>{
    const [userName,setUserName]= useState('')
    const [role,setRole]=useState('')
    return(
        <>
      <input value ={userName} onChange={(e)=>setUserName(e.target.value)}/>

      <input value ={role} onChange={(e)=>setRole(e.target.value)}/>
      <DisplayComponent userName={userName} role={role}/>
        </>
    )
}
export default InputComponent;