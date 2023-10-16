import './src/styles/App.css'
import ShoppingList from './src/components/ShoppingList'
import Header from './src/components/Header'
import FooterJSX from './src/components/Footer'
import Greeter from './src/components/Greeter'
import PropertyList from './src/components/PropertyList'

const data = [
  {id: 1, name: "Desert Urt", rating: 10, price: 100},
  {id: 2, name: "Lone Mountain Ranch", rating: 1, price: 300},
  {id: 3, name: "Oakwood trail", rating: 5 , price: 167},
  {id: 4, name: "Oceanview Condo", rating: 4, price: 202},
  {id: 5, name: "Downtown Penthouse", rating: 8, price: 500}
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
    <PropertyList properties={data}/>
    {/* <Header />
    <Greeter person={"LUKE"} day={"Friday"}/>
    <ShoppingList items={data}/>
    <ShoppingList items={dataTwo}/>
    <ShoppingList items={data}/>
    <FooterJSX/> */}
    </div>
  )
}


