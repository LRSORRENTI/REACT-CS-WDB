function ShoppingListItem({name, quantity, completed}){
  return(
    <li>{name} - {quantity}</li>
  )
}

export default ShoppingListItem;

{/* <ul>
{items.map((item) => (
    <li key={item.id} style={{color: item.completed ? "grey" : "orange", textDecoration: item.completed ? "line-through" : "none" }}>
        {item.name} - {item.quantity}
    </li>
))}
</ul>
) */}