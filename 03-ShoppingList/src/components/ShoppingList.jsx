export default function ShoppingList({items}){
    return(
   <ul>
    {items.map((item) => (
        <li>
            {item.name} - {item.quantity}
        </li>
    ))}
   </ul>
    )
    }