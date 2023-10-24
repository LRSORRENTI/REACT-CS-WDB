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

    const deleteEmojiByUUID = (id) => {
        // Delete emoji by it's unique ID
        // Also need to pass in that id as an argument 
        // in the JSX below, but we can't pass it in 
        // directly like span onClick deleteEmojibyUUID(emoji.id)
        // but we can pass in an anonymous function 
        // that will execute when pressed

        // We still need to implement that actual 
        // meat and potatoes, how do we delete it? 

        // We can use the filter method! We filter based 
        // on the ID 
        setEmojis(prevArr => {
           return prevArr.filter(emoji => emoji.id !== id)
        })
       
        // We use filter, filter creates a copy 
        // of the emojis array, and returns everything 
        // that is NOT equal to the id passed in, leaving 
        // us with our unique emoji we want to delete
        
        // So we'll then set that new filtered array to 
        // be our state var

        }
     


    return (
        <div>
            {emojis.map(emoji => {
                return (
                    <span onClick={() => deleteEmojiByUUID(emoji.id) } key={emoji.id} style={{fontSize: "4rem", cursor: 'pointer'}}>{emoji.emoji}</span>
                )
            })}
            <button onClick={addEmoji}>Add emoji</button>
        </div>
    )
}