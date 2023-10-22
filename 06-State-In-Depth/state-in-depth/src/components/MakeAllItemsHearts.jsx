import { useState } from "react"
import {v4 as uuid } from 'uuid';

export default function EmojiClicker(){
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: ':D'}]);

    function addEmoji(){
        setEmojis(oldEmojis => {
            return [...oldEmojis, {id: uuid(), emoji: ':P'}]
        })
    }

    const deleteEmojiByUUID = (id) => {
        setEmojis(prevArr => {
           return prevArr.filter(emoji => emoji.id !== id)
        })
        }
     
        const makeHearts = () => {
            setEmojis(prevArr => {
                return prevArr.map(ele => {
                    return {
                        ...ele,
                        emoji: '<3'
                    };
                });
            });
        };

    const makeMoney = () => {
        setEmojis(prevArr => {
            return prevArr.map( ele => {
                return {
                    ...ele,
                    emoji: '$$$'
                }
            })
        })
    }
        

    return (
        <div>
            {emojis.map(emoji => {
                return (
                    <span onClick={() => deleteEmojiByUUID(emoji.id) } key={emoji.id} style={{fontSize: "4rem", cursor: 'pointer'}}>{emoji.emoji}</span>
                )
            })}
            <button onClick={addEmoji}>Add emoji</button>
            <button onClick={makeHearts}>Make Hearts'</button>
            <button onClick={makeMoney}>Make $$$'</button>
        </div>
    )
}