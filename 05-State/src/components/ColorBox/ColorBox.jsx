import { useState } from 'react';
import './ColorBox.css';

export default function ColorBox({colors}){

    const [color, setColor] = useState("lime");

    const changeColor = () => {
        const randColorIdx = (Math.floor(Math.random() * colors.length))
        const randColor = colors[randColorIdx];
        setColor(randColor);

    }

    return(
        <div className="ColorBox" 
        onClick={changeColor}
        style={{backgroundColor: color}}>

        </div>
    )

}