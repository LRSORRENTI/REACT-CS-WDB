
import { useState } from "react"

export default function FinalScoreKeeper({numPlayers=3, target=5}){
    
    const [scores, setScores] = userState(new Array(numPlayers).fill(0));
  
    return(
    <div>
       <h1>Score Keeper</h1>
       <ul>
        {scores.map((score, idx) => {
            return <li key={idx}>Player{idx + 1}</li>
        })}
       </ul>
    </div>
  )
}