import { useState , useMemo} from "react"
import ChildComponent from "./ChildComponent"


const MemoizedContainer = () => {
    const[counter,setCounter]=useState(0)
const memoizedComponent = useMemo(() => {
    return <ChildComponent/>
})
    return<>
    <h1>From container counter value = {counter}</h1>
    <button onClick={()=>setCounter(counter+1)}>Click</button>
    {memoizedComponent}
  
    
    
    </>
}
export default MemoizedContainer