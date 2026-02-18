import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const PropertyEdit = () => {
        const { propertyId } = useParams()
        const navigate = useNavigate()
        
        
        //create state
        const [propertyName, setPropertyName] = useState("");
        const [address, setAddress] = useState("");
        const [city, setCity] = useState("");
        const [stateName, setStateName] = useState("");
        const [zip, setZip] = useState("");

        const [types, setTypes] = useState([]);
        const [typeId, setTypeId] = useState("");

        //load types 
    useEffect(() => {
        fetch("http://localhost:8088/types")
            .then((res) => res.json())
            .then((typesArray) => setTypes(typesArray))
        //load property 
        fetch(`http://localhost:8088/properties/${propertyId}`)
        .then((res) => res.json())
        .then((propertyObj) => {
            setPropertyName(propertyObj.name)
            setAddress(propertyObj.address)
            setCity(propertyObj.city)
            setStateName(propertyObj.state)
            setZip(propertyObj.zip)
            setTypeId(String(propertyObj.typeId))
        })
    },[propertyId])

    const handleSave = (e) => {
        e.preventDefault()

        const loggedInUser = JSON.parse(localStorage.getItem("current_user"))

        const updatedProperty = {
            id: Number(propertyId),
            userId: loggedInUser.id,
            typeId:Number(typeId),
            name: propertyName,
            address: address,
            city: city,
            state: stateName,
            zip: zip,
        }

        fetch(`http://localhost:8088/properties/${propertyId}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProperty),
        }).then(() => {
            navigate("/dashboard")
        })
            }
    return (
        <form onSubmit={handleSave}>
            <h1>Edit Property</h1>

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
            required />
    </fieldset>

    <fieldset>
        <label>State</label>
        <input
          value={stateName}
          onChange={(e) => setStateName(e.target.value)}
          required
        />
    </fieldset>

    <fieldset>
        <label>Zip</label>
        <input value={zip} onChange={(e) => setZip(e.target.value)} 
        required 
        />
    </fieldset>

    <fieldset>
        <label> Property Type</label>
        <select value={typeId} onChange={(e) => setTypeId(e.target.value)} required>
            <option value="">Select Property Type...</option>
            {types.map((t) => 
                (<option
                     key={t.id} value={t.id}>
                    {t.name}
                </option>
            ))}
        </select>
    </fieldset>
    
    <button type= "submit">Save Change</button>
    <button type= "button" onClick={() => navigate("/dashboard")}>
        Cancel
    </button>

</form>
    )
}