import Cat from "./Cat";

let dogs = ['Mags', 'Rey'];
const dogSounds = {
  woof: 'WOOF WOOF!',
  ruff: 'Ruff Ruff'
  }
let sound = dogSounds.woof;

function Dog(){
   return <>
     <h1>{(dogs[0] + ' and ' + dogs[1])} Say Woof</h1>
     {/* <Cat/> */}
     <p>{(sound + ' ' + dogSounds.ruff)}</p>
   </>
}



export default Dog;