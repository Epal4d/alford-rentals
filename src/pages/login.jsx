import { useState } from "react";

export const Login = () => {
    //create state
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("email", email)
        console.log("Password", password)


    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            

            <button type="submit">Login</button>
            </form>
    )
}