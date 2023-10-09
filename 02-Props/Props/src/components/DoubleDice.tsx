import React from "react";

export default function DoubleDice(): JSX.Element {
    const num1: number = Math.floor(Math.random() * 3) + 1;
    const num2: number = Math.floor(Math.random() * 3) + 1;
    let truthyFalsy: string; 
    if (num1 !== num2) {
        truthyFalsy = "false";
    } else {
        truthyFalsy = "true";
    }
    return (
        <div>
            <h1>Num1: {num1}</h1>
            <h1>Num2: {num2}</h1>
            <h2>Was a match? {truthyFalsy}</h2>
        </div>
    );
}