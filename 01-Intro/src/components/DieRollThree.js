import Die from "./Die";
import '../styles/Die.css'

export default function ThreeDiceRolls(){
    return <div className="DieRoll">
       <Die/>
       <Die/>
       <Die />
    </div>
}