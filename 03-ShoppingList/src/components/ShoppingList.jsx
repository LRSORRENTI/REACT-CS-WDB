// We have the shopping list component, and we'll 
// destructure the one prop we expect with '{items}'

function ShoppingList({items}){
    return (
        <ul>
            {
            items.map(item => 
            <li>
                {item.name} - {item.quantity}
            </li>)
            }
        </ul>
    )
}

// const data = [
//     {name: "eggs", quantity: 12, completed: false},
//     {name: "milk", quantity: 1, completed: true},
//     {name: "chicken breast", quantity: 4, completed: false},
//     {name: "carrots", quantity: 4, completed: false}
//   ]

export default ShoppingList;