import { useState } from "react";


export const Login = () => {
    //create state
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch(`http://localhost:8088/users?email=${email}`)
        const users = await res.json()

        let foundUser;
        //check if user is found
            if (users.length > 0) {
                 foundUser = users[0]
                    } else 
                        {
                            window.alert("Email not registered")
                            return;
                        }
            //if user found check if password matches
            if (foundUser.password === password) {
                // if matches save user to local storage
                localStorage.setItem("current_user",JSON.stringify(foundUser))
                // send user to dashboard
                //navigate("/dashboard")
            } else
                    {
                     window.alert("incorrect password, Try again")
                    }

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