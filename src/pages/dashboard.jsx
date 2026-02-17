import { useEffect, useState } from "react"
import { PropertyCard } from "../components/propertyCard"

export const Dashboard = () => {

    const [properties, setProperties] = useState([])

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem("current_user"))
    
        fetch(`http://localhost:8088/properties?userId=${loggedInUser.id}`)
            .then((res) => res.json())
            .then((propertiesArray) => {
                setProperties(propertiesArray)
            })
        },[])

        return (
            <div> 
            <h1>Welcome to the Dashboard</h1>
        {properties.map((property) => (
            <PropertyCard
            key={property.id}
            property={property}
            />
        ))}
        </div>
        )
    }