import { useState } from "react";
import '../Toggler/Toggler.css'

export default function ToggleCounter(){
    const [isHappy, setIsHappy] = useState(true);
    const [count, setCount] = useState(0);

    const toggleIsHappy = () => {
        // the easy way to toggle between booleans
        // is the just negate it by using the 
        // ! bang operand
        setIsHappy(!isHappy);
    };

    const incrementCount = () => {
        setCount(count + 1)
    }

    return (
        <>
        <p onClick={toggleIsHappy} className="Toggler">
            {isHappy ? "Happy" : "Sad"}
        </p>
        <p onClick={incrementCount} className="Toggler">
            Count: {count}
        </p>
        </>
    )
};