import { useState } from "react";

function generateGameBoard(){
    console.log("Generating a gameboard")

    // Below will generate an array of 
    // 5000, but each index is empty, but 
    // for learning purposes imagine every index
    // has a value

    return Array(5000);
}

export default function InitializerFunc(){

    // const [board, makeBoard] = useState(generateGameBoard());
   
    // We don't want to execute the function when we 
    // pass it into useState like above, instead, we 
    // just pass the reference name into useState, so 
    // the function will execute once when the component 
    // first renders but won't continually execute: 

  const [board, makeBoard] = useState(generateGameBoard);

  return <button onClick={() => makeBoard("hello")}>Click to change state</button>
}