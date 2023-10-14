import './src/styles/App.css'
import ShoppingList from './src/components/ShoppingList'
import Header from './src/components/Header'
import FooterJSX from './src/components/Footer'
import Greeter from './src/components/Greeter'

const data = [
  {id: 1, name: "eggs", quantity: 12, completed: false},
  {id: 2, name: "milk", quantity: 1, completed: true},
  {id: 3, name: "chicken breast", quantity: 4, completed: false},
  {id: 4, name: "carrots", quantity: 4, completed: false}
]
const dataTwo = [
  {id: 1, name: "Turkey", quantity: 12, completed: false},
  {id: 2, name: "Pineapple", quantity: 1, completed: true},
  {id: 3, name: "Tuna Steak", quantity: 4, completed: false},
  {id: 4, name: "Brussel Sprouts", quantity: 4, completed: true}
]


// Imagine this sample data is actually from mongodb or
// some actual database, not just a hard coded array, 
// but we ned to create a component to render this data

export default function App() {


 return (
  <div>
    <Header />
    <Greeter person={"LUKE"} day={"Friday"}/>
    <ShoppingList items={data}/>
    <ShoppingList items={dataTwo}/>
    <ShoppingList items={data}/>
    <FooterJSX/>
    </div>
  )
}


