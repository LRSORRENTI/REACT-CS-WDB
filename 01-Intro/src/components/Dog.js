import Cat from "./Cat";

let dogs = ['Mags', 'Rey'];
const dogSounds = {
  woof: 'WOOF WOOF',
  ruff: 'Ruff Ruff'
  }

function Dog(){
   return <>
     <h1>{(dogs[0] + ' and ' + dogs[1])} Say Woof</h1>
     {/* <Cat/> */}
     <p>{(dogSounds.woof + ' ' + dogSounds.ruff)}</p>
   </>
}



export default Dog;