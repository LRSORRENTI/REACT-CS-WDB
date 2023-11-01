import { useState } from "react";
import { v4 as uuid }  from 'uuid';
import ValidatedShoppingListForm from "../ListFormValidation/ValidatedShoppingListForm";
import './ShoppingList.css'

export default function ShoppingList() {
    const [items, setItems] = useState([
    {
        id: uuid(), 
        product: "Bananas",
        quantity: 8
    },
    {
        id: uuid(), 
        product: "Eggs",
        quantity: 12
    }
    ]);

    // Now we need to create a function to pass the 
    // shopping list form data to the shopping list 
    // itself

    const addItem = (item) => {
       
            setItems((currItems) => {
            return [...currItems, 
                { ...item, id: uuid() }
            ]
        })
    }

    return (
        <div>
            <h3>Shopping List:</h3>
            <ul className="list">
                {items.map((i) => (
                 <li key={i.id}>
                {i.product} - {i.quantity}
                </li>
                ))}
            </ul>
            <ValidatedShoppingListForm addItem={addItem}/>
        </div>
    )
} 