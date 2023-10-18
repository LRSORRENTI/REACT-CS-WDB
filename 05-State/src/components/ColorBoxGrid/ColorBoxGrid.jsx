import ColorBox from "../ColorBox/ColorBox";
import './ColorBoxGrid.css'

export default function ColorBoxGrid({ colors }) {
    const boxes = [];
    for(let i = 0; i < 25; i++){
        boxes.push(<ColorBox key={i} colors={colors}/>)
    }
    console.log(boxes)
    return (
        <div className="ColorBoxGrid">
            {boxes}
        </div>
    )
}
