import LuckyN from '../components/LuckyN/LuckyN'
import './App.css'

function App() {

  return (
    <>
    <h1>Component Design</h1>
    <LuckyN />
    <LuckyN numDice={3} goal={11}/>
    </>
  )
}

export default App
