function handleClick(){
    console.log("clicked!!!")
}

function mousedOver(){
    console.log('Moused over!!')
}

export default function Clicker(){
    return(
        <div>
            <p onMouseOver={mousedOver}>Click The Button</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}