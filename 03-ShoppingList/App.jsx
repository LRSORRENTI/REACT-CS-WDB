import './src/styles/App.css'
import ShoppingList from './src/components/ShoppingList'


const data = [
  {name: "eggs", quantity: 12, completed: false},
  {name: "milk", quantity: 1, completed: true},
  {name: "chicken breast", quantity: 4, completed: false},
  {name: "carrots", quantity: 4, completed: false}
]

// Imagine this sample data is actually from mongodb or
// some actual database, not just a hard coded array, 
// but we ned to create a component to render this data

export default function App() {

 return (
 
  <div>

    <ShoppingList items={data}/>
    </div>
  )
}


