import Die from '../Die/Die';
import './Dice.css'

export default function Dice( {dice} ) {
    return (
        <section className="Dice"> 
            {Dice.map((v, i) => {
                <Die key={i} val={v} />
            })}
        </section>
    );
};