import './src/styles/App.css'
import Animal from './src/components/Animal'
import Greeter from './src/components/Greeter'

function App() {
 return (
  <div>
 <h1>Hello world!</h1>
 <Animal />
 <Greeter person="Luke"/>
 </div>
  )
}

export default App
