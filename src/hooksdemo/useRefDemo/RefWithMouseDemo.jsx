import { useEffect, useState, useRef } from "react";

const RefWithMouseEvent = () => {
    const [on, setOn] = useState(false); // Set initial state to false

    const refElem = useRef();

    useEffect(() => {
        const listener = (e) => {
            if (!refElem.current) return;
            if (refElem.current.contains(e.target)) {
                setOn(true);
            } else {
                setOn(false);
            }

        };
        console.log("On Status: ", on);
        window.addEventListener("mousedown", listener);
        return () => window.removeEventListener("mousedown", listener);
    }, [on]); // Empty dependency array to ensure the effect runs only once

    if (!on) {
        return null;
    }

    return (
        <ul ref={refElem}>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact us</li>
        </ul>
    );
};

export default RefWithMouseEvent;
