import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

export const PropertyForm = () => {
    /*Set use states for each field*/
    const [propertyName, setPropertyName] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [stateName, setStateName] = useState("")
    const [zip, setZip] = useState("")

    const [types, setTypes]= useState([])
    const [typeId, setTypeId] = useState("")

    const navigate = useNavigate()
    /*UseEffect for fetch for types array*/
    useEffect(() => {
        fetch("http://localhost:8088/types")
        .then((res)=> res.json())
        .then((typesArray)=> setTypes(typesArray))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
/* get current user from local storage initialize it to a variable*/
        const loggedInUser = JSON.parse(localStorage.getItem("current_user"))

        const newProperty = {
            userId: loggedInUser.id,
            typeId: Number(typeId),
            name: propertyName,
            address: address,
            city: city,
            state: stateName,
            zip: zip
        }
        /* Post to database from input fields from user*/       
        fetch("http://localhost:8088/properties",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProperty),
        })
        /*after post is completed redirect user to dashboard*/
        .then((res) => res.json())
        .then(() => {
            navigate("/dashboard")
        })
    }
        
    return (
        <form onSubmit={handleSubmit}>
            <h1>Add Property</h1>
            <fieldset>
                <label>Property Name</label>
                <input
                value={propertyName}
                onChange={(e) => setPropertyName(e.target.value)}
                required/>
            </fieldset>

            <fieldset>
                <label>Address</label>
                <input value={address} onChange={(e) => setAddress(e.target.value)}
                required />
            </fieldset>

            <fieldset>
                <label>City</label>
                <input value={city} onChange={(e) => setCity(e.target.value)}
                required/>
            </fieldset>

             <fieldset>
                <label>State</label>
                <input value={stateName} onChange={(e) => setStateName(e.target.value)}
                required/>
            </fieldset>

             <fieldset>
                <label>Zip</label>
                <input value={zip} onChange={(e) => setZip(e.target.value)}
                required/>
            </fieldset>

            <fieldset>
                <label>Property Type</label>
                <select value={typeId} onChange={(e) => setTypeId(e.target.value)} required>
                    <option value="">Select Property Type...</option>
                    {types.map((t) => (
                        <option key={t.id} value={t.id}>
                            {t.name}
                        </option>
                    ))}
                </select>
            </fieldset>
            <button type="submit">Save Property</button>
        </form>
    )
}