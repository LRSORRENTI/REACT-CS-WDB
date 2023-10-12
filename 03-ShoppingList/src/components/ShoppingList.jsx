export default function ShoppingList({items}){
    return(
   <ul>
    {items.map((item) => (
        <li style={{color: item.completed ? "grey" : "orange", textDecoration: item.completed ? "line-through" : "none" }}>
            {item.name} - {item.quantity}
        </li>
    ))}
   </ul>
    )
    }