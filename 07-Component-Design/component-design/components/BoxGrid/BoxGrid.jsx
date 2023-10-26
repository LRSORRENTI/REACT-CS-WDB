import './BoxGrid.css'
import Box from '../Box/Box'
import { useState } from 'react'


export default function BoxGrid() {
    const [boxes, setBoxes] = useState([false, false, 
    false, false, false, false, false, false, false])
    
    const reset = () => {
        setBoxes(
            [false, false, 
                false, false, false, false, false, false, false]
        )
    }

    const toggleBox = (idx) => {
        // This handler function will be passed down 
        // to the box component, we need to copy the array
        // using map: 
        setBoxes(oldBoxes => {
          return oldBoxes.map((value, i) => {
                if(i === idx){
                    return !value
                } else {
                    return value
                };
            });
        });
    };
    
    return (
    <div className='BoxGrid'>
       {boxes.map((box , idx)  => <Box key={idx} isActive={box} toggle={ () => toggleBox(idx)}/>)}
       <button onClick={reset}>Reset</button>
    </div>
    )
}