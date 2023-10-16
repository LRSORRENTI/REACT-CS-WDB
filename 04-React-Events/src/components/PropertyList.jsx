import PropertyListItem from "./PropertyListItem";
import '../styles/PropertyList.css'

export default function PropertyList({ properties }) {
        return(
            <div className="PropertyList">
                {properties.map(p => {
                    return <PropertyListItem {...p} key={p.id}/>
                })}
            </div>
        )
}
