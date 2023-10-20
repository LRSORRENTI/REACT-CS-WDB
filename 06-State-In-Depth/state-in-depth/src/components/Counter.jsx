import { useState } from "react";


export default function Counter(){
    const [num, setCount] = useState(0);

    const incrementNum = () => {
        setCount(num + 1)
    }
    const addThree = () => {
        // in React when we want to use the current 
        // value of the state var, we use this below 
        // syntax, below c represents whatever the 
        // current value of num, the state var, actually
        // is
        setCount(current => current + 1)
        // And if we repeat this three times, react adds
        // a queue like structure:
        setCount(current => current + 1)
        setCount(current => current + 1)
        // By using this callback like structure, we 
        // can make changes to state, which depend on 
        // retaining the current or 'current' value of a given 
        // state var
    }  
        

    return (
        <>
        <button onClick={incrementNum}>Click</button>
        <div>
            Num is {num}
        </div>
        <button onClick={addThree}>+3</button>
        </>
    )
}