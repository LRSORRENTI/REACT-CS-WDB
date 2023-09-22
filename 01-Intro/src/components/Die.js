export default function Die(){
    const randNum = Math.ceil(Math.random() * 6);
    return <h1>Die Roll: {randNum}</h1>
}