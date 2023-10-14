import ShoppingListItem from "./ShopingListItem"

export default function ShoppingList({items}){
    return(
   <ul>
    {items.map((item) => (
      <ShoppingListItem
       key={item.id} 
       name={item.name} 
       quantity={item.quantity} 
       completed={item.completed} />
    ))}
   </ul>
    )
    }