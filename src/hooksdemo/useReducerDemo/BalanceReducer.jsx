import { useReducer } from "react"

const balanceReducer = (state, action) => {
    switch (action.type) {
        case "DEPOSIT":
            return state + Number(action.payload)
        case "WITHDRAW":
            return state - Number(action.payload)
        default:
            return state
    }
}

const BalanceReducer = ()=>{
    const initialBalance=5000
    let amount = 100
    
    const [balance,dispatch]= useReducer(balanceReducer,initialBalance)

    return <>
    <h1>Balance: {balance}</h1>
    <input value={amount} onChange={(e)=>setAmount(e.target.value)}/>
    <button className="btn btn-primary" onClick={()=>dispatch({type:'DEPOSIT', payload:amount})}>Deposit</button>
    <button className="btn btn-primary" onClick={()=>dispatch({type:'WITHDRAW', payload:amount})}>Withdraw</button>

    <button className="btn btn-primary" onClick={()=>dispatch({})}>Check Balance</button>
    
    
    
    </>
}

export default BalanceReducer