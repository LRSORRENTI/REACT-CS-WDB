import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm/ShoppingListForm";

export default function ShoppingList() {
    const [items, setItems] = useState([
    {
        id: 1, 
        product: "Bananas",
        quantity: 8
    },
    {
        id: 2, 
        product: "Eggs",
        quantity: 12
    }
    ]);

    // Now we need to create a function to pass the 
    // shopping list form data to the shopping list 
    // itself

    const addItem = (item) => {
    
        setItems((currItems) => {
            return [
                ...currItems, 
                {...item,
                    id: 9
                }
            ]
        })
    }

    return (
        <div>
            <h3>Shopping List:</h3>
            <ul>
                {items.map((i) => (
                 <li key={i.id}>
                {i.product} - {i.quantity}
                </li>
                ))}
            </ul>
            <ShoppingListForm addItem={addItem}/>
        </div>
    )
} 