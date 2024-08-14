import { useState } from "react";
import useZipCode from "./useZipCode";

const ShippingAddress = () => {
    const [zipcode, setZipcode] = useState('');
    const [city, state] = useZipCode(zipcode);

    const formHandler = (e) => {
        e.preventDefault();
        // No need to update zipcode here as it's already managed by the input's onChange
    }

    return (
        <>
            <form className='form-group' onSubmit={formHandler}>
                <label>Enter Zipcode</label>  {/* Corrected label tag */}
                <input value={zipcode} onChange={(e) => setZipcode(e.target.value)} type="text" />
                <button type="submit">Look for City</button>
            </form>
            <h1>Address Details</h1>
            <h2>City: {city}</h2>
            <h2>State: {state}</h2>
        </>
    )
}

export default ShippingAddress;
