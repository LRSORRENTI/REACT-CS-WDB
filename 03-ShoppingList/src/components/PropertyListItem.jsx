export default function PropertyListItem({ id, name, rating, price }) {

    return (
        <div className="Property">
          <h2>{name}</h2>
          <h3>${price} per night</h3>
          <h4>{rating}Stars</h4>
          </div>


    );
  }
  