import React from "react";



// export default function Heading({ color = "olive", text }: HeadingProps): JSX.Element {
//   return <h1 style={{ color: color }}>{text}</h1>;
// }



export default function ColorList({colors}){
    const lis = colors.map(c => <li style={{color: c}}>{c}</li>)
    return (
        <div>
            <p>
                Color List
            </p>
            <ul>{lis}</ul>
        </div>
    )
}