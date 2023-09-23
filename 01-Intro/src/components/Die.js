import '../styles/Die.css'

export default function Die(){
    const randNum = Math.ceil(Math.random() * 6);
    return <h1 className="Die">Die Roll: {randNum}</h1>
}
