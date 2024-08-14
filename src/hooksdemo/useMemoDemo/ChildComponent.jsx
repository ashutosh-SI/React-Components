import { useEffect } from "react"

let renderCount = 0

const ChildComponent = () => {
    useEffect(() => {
        renderCount++
        console.log("Inside the useEffect of the child 1",renderCount)
    
    })

    return<>
    <h1>From child component, Count Value={renderCount}</h1>
    
    
    </>

}
export default ChildComponent