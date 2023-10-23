import './App.css'
import EmojiClicker from './components/EmojiClicker'
import FinalScoreKeeper from './components/FinalScoreKeeper'
// import ScoreKeeper from './components/ScoreKeeper'
// import Counter from './components/Counter'
// import InitializerFunc from './components/InitializerFunc'
import MakeAllItmesHearts from './components/MakeAllItemsHearts'
function App() {

  return (
    <>
    <h1>State in depth</h1>
   {/* <EmojiClicker/> */}
    {/* <MakeAllItmesHearts/> */}
    <FinalScoreKeeper numPlayers={12} target={15}/>
    </>
  )
}

export default App
