import axios from 'axios';
import React, { useState, useEffect } from "react";

function ProductListTable({ productList, error }) {
    const getTableRows = () => {
        return productList?.map(p => (
            <tr key={p.id}>
                <td><img src={p.image} alt={p.title} style={{ width: '200px', height: '200px' }} /></td>
                <td>{p.title}</td>
                <td>{p.price}</td>
                <td>{p.description}</td>
            </tr>
        ));
    };

    if (error) {
        return <div>Error loading products: {error.message}</div>;
    }

    return (
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {productList ? getTableRows() : <tr><td colSpan="4">Loading...</td></tr>}
            </tbody>
        </table>
    );
}

function ProductLoader({ children }) {
    const url = 'https://fakestoreapi.com/products';
    const [productList, setProductList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let { data } = await axios.get(url);
                setProductList(data);
            } catch (err) {
                setError(err);
            }
        };
        fetchProducts();
    }, []);

    return children(productList, error);
}

export default function ProductLoaderContainer() {
    return (
        <>
            <h1>Products List</h1>
            <ProductLoader>
                {(productList, error) => <ProductListTable productList={productList} error={error} />}
            </ProductLoader>
        </>
    );
}
