export default function Slots() {
    const val1 = Math.floor(Math.random() * 3 + 1);
    const val2 = Math.floor(Math.random() * 3 + 1);
    const val3 = Math.floor(Math.random() * 3 + 1);
    const isWinner = val1 === val2 && val1 === val3;
    
    let slotValues = {
        1: "apple",
        2: "gf",
        3: "cherry"
    };

    const val1Text = slotValues[val1];
    const val2Text = slotValues[val2];
    const val3Text = slotValues[val3];

    return (
        <div>
            <h1>{val1Text} {val2Text} {val3Text}</h1>
            <h2 style={{ color: isWinner ? "green" : "red" }}>{isWinner ? "winner" : "loser"}</h2>
            {isWinner && <p>Winner</p>}
        </div>
    );
}