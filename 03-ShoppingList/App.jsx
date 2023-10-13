import './src/styles/App.css'
import ShoppingList from './src/components/ShoppingList'
import Header from './src/components/Header'
import FooterJSX from './src/components/Footer'

const data = [
  {id: 1, name: "eggs", quantity: 12, completed: false},
  {id: 2, name: "milk", quantity: 1, completed: true},
  {id: 3, name: "chicken breast", quantity: 4, completed: false},
  {id: 4, name: "carrots", quantity: 4, completed: false}
]

// Imagine this sample data is actually from mongodb or
// some actual database, not just a hard coded array, 
// but we ned to create a component to render this data

export default function App() {


 return (
  <div>
    <Header />
    <ShoppingList items={data}/>
    <ShoppingList items={data}/>
    <ShoppingList items={data}/>
    <FooterJSX/>
    </div>
  )
}


