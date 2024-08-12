import { useEffect, useState } from "react"

const FetchProducts= ()=>{
    let url = `https://fakestoreapi.com/products`
    const[productList,setProductList]=useState()

    useEffect(()=>async()=>{
        let response = await fetch(url)
        let data = await response.json()
        setProductList(data)

    },[])

    const getTableRows= () =>{
    
       return productList?.map(p => <tr key={p.id}><td>{p.title}</td><td>{p.price}</td><td>{p.description}</td></tr>)
    }
    return<>
    <h1>List of products</h1>
    <h3>Number of items found: {productList?.length}</h3>
    <table className="table table-striped table-bordered">
        <thead><tr><th>Title</th><th>Price</th><th>Description</th></tr></thead>
        <tbody>{getTableRows()}</tbody>
    </table>
    </>
}

export default FetchProducts