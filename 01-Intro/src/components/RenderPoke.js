import '../styles/poke.css'

export default function RenderPoke(){
    const randNum = Math.ceil(Math.random() * 151);
   return (<div id="parent">
     <h1>Pokemon #{randNum}</h1>
     <img alt="a nice pokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randNum}.png`}></img>
    </div>
   )
}