import './src/styles/App.css'
import Animal from './src/components/Animal'
import Greeter from './src/components/Greeter'
import Die from './src/components/Die'

function App() {
 return (
  <div>
 <h1>Hello world!</h1>
 <Animal />
 <Greeter person="Luke" day="Friday"/>
 <Die numSides={6}/>
 </div>
  )
}

export default App
