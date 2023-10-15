import PropertyListItem from "./PropertyListItem";

export default function PropertyList({ properties }) {
  const styles = {
    display: "inline-block",
    width: '500px',
    marginRight: '150px'
  };

  const listStyles = {
    display: 'flex', // Set display to flex
    flexDirection: 'row' // Set flex-direction to row
  };

  return (
    <div style={styles}>
      <ul style={listStyles}>
        {properties.map((property) => (
          <PropertyListItem
            key={property.id}
            name={property.name}
            rating={property.rating}
            price={property.price}
          />
        ))}
      </ul>
    </div>
  );
}
