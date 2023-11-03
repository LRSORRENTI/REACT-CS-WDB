import { useEffect, useState } from "react";

export default function Counter() {
   const [count, setCount] = useState(0);
   const [name, setName] = useState("");

   const incrementCount = () =>  {
        setCount((count) => count + 1);  
   }

   const resetCount = () => {
        setCount((count) => count * 0);
   }
   // Below is a valid use of useEffect, any time 
   // state changes and we get a re-render, this 
   // useEffect hook is called

   // It's not common to see useEffect used in this 
   // way but it's impotant to know you're able to 
   // use it like this if needed 

//    useEffect(function myEffect(){
//         console.log("my effect was called")
//    })
   // We can modify the above to only run 
   // when count changes by passing in that 
   // second argument: 

   useEffect(function myEffect(){
    console.log("count was changed so I'm called")
   }, [count])
   // Now useEffect only runs when count changes, and 
   // when the input field changes, useEffect doesn't 
   // run anymore 

   // And as a note, if we pass in an empty array and 
   // omit the count piece of state, it tells useEffect 
   // to run only when the component first mounts 

//    useEffect(function myEffect(){
//     console.log("count was changed so I'm called")
//    }, [])

   const handleChange = (evt) => {
        setName(evt.target.value);
   }

   return (
    <>
    <button onClick={incrementCount}>Count++</button>
    <button onClick={resetCount}>Reset</button>
    <h1>Count: {count}</h1>
    <p>Name: {name}</p>
    <input type="text" value={name} onChange={handleChange} />
    </>
   )
}