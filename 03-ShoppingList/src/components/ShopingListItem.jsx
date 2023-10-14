function ShoppingListItem({name, quantity, completed}){
  const styles = {
    color: completed ? "grey" : "orange",
    textDecoration: completed ? "line-through" : "none"
     }
    return(
    <li style={styles}>{name} - {quantity}</li>
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