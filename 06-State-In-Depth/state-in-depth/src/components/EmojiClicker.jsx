import { useState } from "react"
import {v4 as uuid } from 'uuid';

export default function EmojiClicker(){
    // For this example we'll use an array as state,
    // then loop over that state to render each emoji
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: ':D'}]);

    function addEmoji(){
        // We need a copy of emojis to change the 
        // state, we don't want to mutate the original
        // array directly, just like how it was with objects
    
        setEmojis(oldEmojis => {
            // And generally we always want to use callbacks 
            // to 

            // We make a copy of the old array with 
            // ...oldEmojis
            return [...oldEmojis, {id: uuid(), emoji: ':P'}]
        })
    }

    // const removeEmoji = (idx) => {
    //     setEmojis((oldEmojis => {
    //         const newArray = [...oldEmojis];
    //         newArray.splice(idx, 1);
    //         return newArray;
    //     }))
    // }

    return (
        <div>
            {emojis.map(emoji => {
                return (
                    <span key={emoji.id} style={{fontSize: "4rem"}}>{emoji.emoji}</span>
                )
            })}
            <button onClick={addEmoji}>Add emoji</button>
        </div>
    )
}