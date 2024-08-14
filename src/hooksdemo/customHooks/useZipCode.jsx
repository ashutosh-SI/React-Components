import { useState, useEffect } from 'react';

const useZipCode = (zipcode) => {
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const API_URL = `https://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/`;
    const API_KEY = 'DEMOAPIKEY';  // Consider moving this to an environment variable

    useEffect(() => {
        if (!zipcode) return;  // Check if zipcode is not empty

        const getAddressData = async () => {
            const response = await fetch(`${API_URL}${zipcode}?key=${API_KEY}`);
            if (response.ok) {
                const data = await response.json();
                setCity(data.City);
                setState(data.State);
            } else {
                setCity('Invalid Zipcode');
                setState('');
            }
        }

        getAddressData();
    }, [zipcode]);

    return [city, state];
}

export default useZipCode;
