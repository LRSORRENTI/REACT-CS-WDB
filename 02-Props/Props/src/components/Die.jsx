export default function Die({ numSides = 6 }){
    console.log(numSides)
    const roll = Math.floor(Math.random() * numSides) + 1;
    return (
        <div>
        <h2>Number of sides: {numSides}</h2>
    <p>Die Roll: {roll}</p>
    </div>
    )
}