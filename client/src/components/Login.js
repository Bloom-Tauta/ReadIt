import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login({loginUser}){
    const [error,setError] = useState(false)
    const navigate = useNavigate()

    return(

        <div>
            <form 
            onSubmit={(e) => {
                e.preventDefault()
                fetch("http://localhost:3000/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                    body: JSON.stringify({
                        username: e.target.username.value,
                        password: e.target.password.value
                    })
                })
                .then((response) => {
                    if(response.status === 200) {
                        response.json().then(data => {
                           loginUser(data.user)
                            sessionStorage.setItem('jwt', data.token)
                            navigate("/landingpage")

                        })
                    }
                    else {
                        response.json().then(data => {
                            setError(true)
                        })
                    }
                })
            }}className="flex flex-col bg-sky-200 p-5 max-w-xl mx-auto">
            <label  className="form-label">Username</label>
            <input type="text" className="form-control px-3 py-1" id="idInput" placeholder="Enter your username" name ="username"/>
            <label  className="form-label">Password</label>
            <input type="password" className="form-control px-3 py-1" id="nameInput" placeholder="Enter your password" name ="password"/>
            {error? <p className="text-red-600">Invalid username or password</p> :null}
            <button className="bg-gray-700 w-max mx-auto py-2 px-4 my-2">Login</button>
            </form>
            
        </div>
    )
} export default Login;