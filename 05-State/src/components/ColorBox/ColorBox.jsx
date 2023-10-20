import { useState } from 'react';
import './ColorBox.css';

function generateRandColor(arr){
    const randColorIdx = Math.floor(Math.random() * arr.length);
    return arr[randColorIdx];
}


export default function ColorBox({colors}){

    const [color, setColor] = useState(generateRandColor(colors));

    
    const changeColor = () => {
        const randomColor = generateRandColor(colors);
        setColor(randomColor);

    }

    return(
        <div className="ColorBox" 
        onClick={changeColor}
        style={{backgroundColor: color}}>

        </div>
    )

}