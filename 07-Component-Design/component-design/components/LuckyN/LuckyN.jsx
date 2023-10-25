// As a quick note, we'll pass default props in
// where the goal for the game is 7, and number 
// of dice is two, these can be changed later

import { useState } from "react";
import { getRolls} from "../../utilities/utils";
import Dice from '../Dice/Dice'
import Button from "../Button/Button";

export default function LuckyN({ title="Dice Game", numDice = 2, winCheck}) {
    // as a quick note, we could implement an intializer 
    // func, right now getRolls will execute on every
    // refresh but we'll skip it for now

   const [dice, setDice] = useState(getRolls(numDice));
   
   // Below will be true or false, if goal is equal 
   const isWinner = winCheck(dice);

   const roll = () => setDice(getRolls(numDice));

    return (
        <main className="LuckyN">
            <h1>
                Lucky: {title} {isWinner && "You Win!"}
            </h1>
            <Dice dice={dice}/> 
            <button onClick={roll}>Roll Dice</button>
            <Button label={'Click me'} clickFunc={roll}/>
        </main>
    )
};