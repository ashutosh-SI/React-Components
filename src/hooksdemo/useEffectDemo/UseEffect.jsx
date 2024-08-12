import React, { useState, useEffect } from 'react';

const SimpleUseEffect = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    useEffect(() => {
        console.log("From useEffect - value1: " + value1 + ", value2: " + value2);
    }, [value1, value2]); // Add both value1 and value2 as dependencies

    return (
        <>
            <div>
                <h3>Value 1 = {value1}</h3>
                <label>Enter value 1:</label>
                <input 
                    value={value1} 
                    onChange={e => setValue1(e.target.value)} 
                />
            </div>
            <div>
                <h3>Value 2 = {value2}</h3>
                <label>Enter value 2:</label>
                <input 
                    value={value2} 
                    onChange={e => setValue2(e.target.value)} 
                />
            </div>
        </>
    );
}

export default SimpleUseEffect;
