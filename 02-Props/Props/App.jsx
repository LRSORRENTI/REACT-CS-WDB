import './src/styles/App.css'
import Animal from './src/components/Animal'
import Greeter from './src/components/Greeter'
import Die from './src/components/Die'
import DayPicker from './src/components/DayOfWeekPicker.'
import DoubleDice from './src/components/DoubleDice'
function App() {
  // Below we omit the prop value for the 
  // first greeter, defaults to 'Luke', but for 
  // the second greeter call we omit the day= prop
  // which has no default value therefore nothing 
  // is rendered it's just 'How are you on this' 
 return (
  <div>
 {/* <h1>Hello world!</h1>
 <Animal />
 <Greeter day="Friday"/>
 <Greeter />
 <Greeter person='Eddie' day="Monday"/>
 <Die />
 <Die numSides={10}/> */}
 <DayPicker values={['Mon ', 'Tues ', 'Weds ', 'Thurs ', 'Fri ']} />
 <DoubleDice />
 </div>
  )
}

export default App
