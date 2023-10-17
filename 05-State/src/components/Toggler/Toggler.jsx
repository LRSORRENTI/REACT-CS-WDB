import { useState } from "react";
import '../Toggler/Toggler.css';

export default function Toggler(){
    const [isHappy, setIsHappy] = useState(true);

    const toggleIsHappy = () => {
        // the easy way to toggle between booleans
        // is the just negate it by using the 
        // ! bang operand
        setIsHappy(!isHappy);
    }

    return (
        <>
        <p onClick={toggleIsHappy} className="Toggler">
            {isHappy ? "Happy" : "Sad"}
        </p>
        </>
    )
}