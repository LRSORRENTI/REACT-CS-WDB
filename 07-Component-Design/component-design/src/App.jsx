import './App.css'
import Dice from '../components/Dice/Dice'

function App() {

  return (
    <>
    <h1>Component Design</h1>
    <Dice dice={[3, 6 ,1]} color="rgb(134, 216, 175)"/>
    <Dice dice={[3, 6 ,1]} color="lightcoral"/>
    <Dice dice={[3, 6 ,1]} />
    </>
  )
}

export default App
