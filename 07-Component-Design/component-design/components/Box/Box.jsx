import './Box.css'
import { useState } from 'react'

export default function Box({isActive, toggle}){
    
    // Commenting out the below useState since we want 
    // to manage state on the BoxGrid component instead
    // const [isActive, setIsActive] = useState(false);

    // function toggleIsActive(){
    //    return setIsActive(!isActive);
    // }

    return ( 
        <div className="Box"
    onClick={toggle}
    style={{backgroundColor: isActive ? "red" : "black"}}>
        </div>
    )
}