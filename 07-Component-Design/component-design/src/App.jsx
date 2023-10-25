// import { lessThanFour } from '../utilities/utils'
import Box from  '../components/Box/Box'
import LuckyN from '../components/LuckyN/LuckyN'
import { sum } from '../utilities/utils'

import './App.css'


function lessThanFour(dice) {
  return sum(dice) < 4;
}

function allSameValue(dice) {
  return dice.every( (val) => val === dice[0] )
}

function App() {

  return (
    <>
    <h1>Component Design</h1>
    {/* <LuckyN title='Roll < 4' winCheck={lessThanFour}/>
    <LuckyN title='Match Dice' winCheck={allSameValue}/> */}
    {/* <LuckyN numDice={3} goal={11}/> */}
    <Box/>
    <Box/>
    <Box/>
    </>
  )
}

export default App
