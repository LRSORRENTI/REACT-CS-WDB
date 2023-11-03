import { useEffect, useState } from "react";

export default function Counter() {
   const [count, setCount] = useState(0);

   const incrementCount = () =>  {
        setCount((count) => count + 1);  
   }

   const resetCount = () => {
        setCount((count) => count * 0);
   }

   useEffect(function myEffect(){
        console.log("my effect was called")
   })

   return (
    <>
    <button onClick={incrementCount}>Count++</button>
    <button onClick={resetCount}>Reset</button>
    <h1>Count: {count}</h1>
    </>
   )
}