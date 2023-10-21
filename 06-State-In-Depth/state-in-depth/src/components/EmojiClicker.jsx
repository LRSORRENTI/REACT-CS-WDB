import { useState } from "react"

export default function EmojiClicker(){
    // For this example we'll use an array as state,
    // then loop over that state to render each emoji
    const [emojis, setEmojis] = useState([":)"]);

    function addEmoji(){
        // We need a copy of emojis to change the 
        // state, we don't want to mutate the original
        // array directly, just like how it was with objects
    
        setEmojis(oldEmojis => {
            // We make a copy of the old array with 
            // ...oldEmojis
            return [...oldEmojis, ":("]
        })
    }

    return (
        <div>
            {emojis.map(emoji => {
                return (
                    <span style={{fontSize: "4rem"}}>{emoji}</span>
                )
            })}
            <button onClick={addEmoji}>Add emoji</button>
        </div>
    )
}