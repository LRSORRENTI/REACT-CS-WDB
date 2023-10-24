import { useState } from "react";

export default function ScoreKeeper(){
    // To keep track of each players score, we'll 
    // use an object:

   const [scores, setScores] = useState({p1Score: 0, p2Score: 0})
   
   function increaseP1Score(){
    //  const newScores = {...scores, p1Score: scores.p1Score + 1}
     // The above where we use the spread operator 
     // to make a copy of the scores state var is how 
     // we get the component to render the new score, 
     // if we try to just p1Score += 1 directly, React 
     // that won't work, we need a copy of that original 
     // state then use spread and increment count,
     // then pass that copy into setScores:

     //setScores(newScores)

     // And the above works, but in React it's best practice 
     // to use callback syntax when we have state that 
     // depends on the old version 

    setScores(oldScores => {
       return {...oldScores, p1Score: oldScores.p1Score + 1}
    })
      // This is one of the main takeaways we never 
      // mutate arrays or objects in state directly, 
      // we always always make a copy, usually using 
      // spread operator
   }

   function increaseP2Score(){
    setScores(oldScores => {
        return {...oldScores, p2Score: oldScores.p2Score + 1}
    })
   }

    return(
        <div>
            <p>
                Player 1: {scores.p1Score}
            </p>
            <p>
                Player 2: {scores.p2Score}
            </p>
            <button onClick={increaseP1Score}>+1 Player 1</button>
            <button onClick={increaseP2Score}>+1 Player 2</button>
        </div>
    );
};