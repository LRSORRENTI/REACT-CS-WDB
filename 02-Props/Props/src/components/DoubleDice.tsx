import React from "react";

export default function DoubleDice(){
    const num1: number = Math.floor(Math.random() * 3) + 1;
    const num2: number = Math.floor(Math.random() * 3) + 1;
    let truthyFalsy: string; 
    // if (num1 !== num2) {
    //     truthyFalsy = "false";
    // } else {
    //     truthyFalsy = "true";
    // }
    if(num1 !== num2 ? truthyFalsy = "false" : truthyFalsy = 'true')
    return (
        <div>
            <h1>Num1: {num1}</h1>
            <h1>Num2: {num2}</h1>
            <h2>Was a match? {truthyFalsy}</h2>
            <h2>Also can use inline JS conditional 
                check: {num1 !== num2 ? truthyFalsy = "false" : truthyFalsy = 'true'}
            </h2>
            Can also even render html elements inside the 
            condtional check: 
            <h3>{num1 !== num2 ? <p>"false"</p> : <p> 'true'</p>}</h3>
            <h3>Double ampersand check for condtional rendering: 
                num1 === num2 && h3div{num1 === num2 && <h3>You win</h3>} : {<h3>You lose</h3>}</h3>
        </div>
    );
}