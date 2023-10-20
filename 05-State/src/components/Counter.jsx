import { useState } from "react";

export default function Counter(){

    const [num, setNum] = useState(0);


    console.log(`num: ${num} and the component 
    has been re-rendered`)

    const changeNum = () => {
        setNum(num + 1)
    };

    return (
        <div>
            <p>The count is: {num}</p>
                <button onClick={changeNum}>
                    Increment
                </button>
        </div>
    )
}