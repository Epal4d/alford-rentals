import { useNavigate } from "react-router-dom"

export const PropertyCard = ({ property,updateCard }) => {
    const navigate = useNavigate()

    const handleDelete = () => { 
        fetch(`http://localhost:8088/properties/${property.id}`, {
            method: "DELETE",
        }).then(() => {
            updateCard()
        })
    }

    return (
        <section className="property-card">
            <h3>{property.name}</h3>
            <p>{property.address}</p>
            <p>
             {property.city}, {property.state}, {property.zip}
            </p>

            <button onClick= {() => navigate(`/edit/${property.id}`)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </section>
    )
}