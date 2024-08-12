import React, { useState } from 'react';

const EmojiDisplay = () => {
    const [mood, setMood] = useState('unknown');
    let emotions = new Map();
    emotions.set('😭', 'Listen to Music');
    emotions.set('💀', 'Go for a Ride');
    emotions.set('😂', 'Hey Dude Cheer Up');
    emotions.set('🔥', 'Let me Join with you');
    emotions.set('✅', 'Go to Gym');

    // Handle the setMood
    const handleMoodChange = (e) => {
        setMood(e.target.value);
    };

    // Method that returns a dropdown list by iterating through the map.
    const populateDropdownList = () => {
        return (
            <select onChange={handleMoodChange}>
                <option value="Select an emoji">Select an emoji</option>
                {[...emotions.keys()].map((k) => (
                    <option key={k} value={emotions.get(k)}>
                        {k}
                    </option>
                ))}
            </select>
        );
    };

    return (
        <div className="container m-2 p-3">
            <h1 className="bg-primary m-2 p-2">What's your mood</h1>
            <h2>{mood}</h2>
            <br />
            {populateDropdownList()}
        </div>
    );
};

export default EmojiDisplay;
