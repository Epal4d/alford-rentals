export const PropertyCard = ({ property }) => {
    return (
        <section className="property-card">
            <h3>{property.name}</h3>
            <p>City: {property.city}</p>
            <p>Address: {property.address}</p>
        </section>
    )
}