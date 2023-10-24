// As a quick note, we'll pass default props in
// where the goal for the game is 7, and number 
// of dice is two, these can be changed later

import { useState } from "react";
import { getRolls, sum } from "../../utilities/utils";
import Dice from '../Dice/Dice'

export default function LuckyN({numDice = 2, goal = 7}) {
    // as a quick note, we could implement an intializer 
    // func, right now getRolls will execute on every
    // refresh but we'll skip it for now

   const [dice, setDice] = useState(getRolls(numDice));
   
   // Below will be true or false, if goal is equal 
   const isWinner = sum(dice) === goal;
    return (
        <main className="LuckyN">
            <h1>
                Lucky {goal} {isWinner ? "You Win!" : ""}
            </h1>
            <Dice dice={dice}/> 
        </main>
    )
};