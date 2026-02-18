import { useEffect, useState } from "react"
import { PropertyCard } from "../components/propertyCard"

export const Dashboard = () => {
    const [properties, setProperties] = useState([])
        
    const getProperties = () => {
            const loggedInUser = JSON.parse(localStorage.getItem("current_user"))

            fetch(`http://localhost:8088/properties?userId=${loggedInUser.id}`)
                .then((res) => res.json())
                .then((propertiesArray) => {
                    setProperties(propertiesArray)
                })
            
    }
    useEffect(() => {
        getProperties()
    }, [])

        
        return (
            <div> 
                <h1>Welcome to the Dashboard</h1>
                
                {properties.map((property) => (
                    <PropertyCard
                    key={property.id}
                    /*pass to property (each object in properties array) component as a prop*/
                    property={property}
                    /*pass the fetch function as a prop to ProperCard*/
                    updateCard={getProperties}
                    />
                ))}
            </div>
        )
    }