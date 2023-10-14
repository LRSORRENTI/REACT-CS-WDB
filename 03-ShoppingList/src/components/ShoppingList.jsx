import ShoppingListItem from "./ShopingListItem"

export default function ShoppingList({items}){
    return(
        <div>
   <ul>
    {items.map((item) => (
      <ShoppingListItem
       key={item.id} 
       name={item.name} 
       quantity={item.quantity} 
       completed={item.completed} />
    ))}
   </ul>
   <ul>
   {items.map((item) => (
      <ShoppingListItem
       key={item.id} 
        {...item} />
    ))}
   </ul>
   
   </div>
    )
    }

// we can even shorten the above since all the prop
// names match exactly, we can just use the spread 
// operator {...item}