import { useState } from "react";

const DisplayList = () => {
    const [fruits, setFruits] = useState({
        Mango: true,
        Apple: true,
        Orange: true,
        Guava: true,
        Peach: true,
        Pineapple: true
    });
    const [newFruit, setNewFruit] = useState("");

    // Add a fruit to the list
    const addFruit = () => {
        if (newFruit.trim() !== "" && !fruits.hasOwnProperty(newFruit.trim())) {
            setFruits({ ...fruits, [newFruit.trim()]: true });
            setNewFruit(""); 
        }
    };

    // Remove a fruit from the list
    const removeFruit = () => {
        const { [newFruit.trim()]: _, ...remainingFruits } = fruits;
        setFruits(remainingFruits);
        setNewFruit(""); 
    };

    return (
        <div className="container m-2 p-3">
            <h1 className="bg-primary m-2 p-2">Fruit List</h1>

            <ul>
                {Object.keys(fruits).map((fruit, index) => (
                    <li key={index}>
                        {fruit}
                    </li>
                ))}
            </ul>

            <input 
                type="text" 
                value={newFruit} 
                onChange={(e) => setNewFruit(e.target.value)} 
                placeholder="Enter fruit name" 
            />
            <button onClick={addFruit}>Add Fruit</button>
            <button onClick={removeFruit}>Remove Fruit</button>
        </div>
    );
};

export default DisplayList;
