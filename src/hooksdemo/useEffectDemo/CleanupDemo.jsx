import { useEffect, useState } from "react"

const Timer = ()=>{
    const[timer,setTimer]=useState(10)


    useEffect(()=>{
        console.log("From useEffect Beginning")
        const interval = setInterval(()=>{
            setTimer((prevTimer)=>(prevTimer===0 ? 0 : prevTimer-1))
            console.log(`Timer: ${timer}`)
        },1000)


        return ()=>{
            console.log("From the return statement called when unmounted")
            clearInterval(interval)
            //cleanup activity
        }
    },[])
    return <h3>Timer: {timer}</h3>
}

const ShowHideTimer = ({show})=> (show ? <Timer/> : <p> nothing to render</p>)

const CleanUpWithUseEffect = ()=>{
    const [show,setShow] = useState(false)

    return <>
    <h1>From the container</h1>
    <button onClick={()=> setShow(!show)}>
        {show ? 'Hide': 'Show'} Timer
    </button>
    
    <ShowHideTimer show = {show}/>
    
    </>
}

export default CleanUpWithUseEffect