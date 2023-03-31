import { useNavigate } from "react-router-dom"
function SignUp(){
    const navigate = useNavigate()
    return(
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                fetch("http://localhost:3000/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                    body: JSON.stringify({
                        username: e.target.username.value,
                        password: e.target.password.value,
                        password_confirmation: e.target.password_confirmation.value
                    })
                })
                .then((response) => {
                    if(response.status === 201) {
                        response.json().then(data => {
                            console.log(data)
                           // setUser(data.user)
                            sessionStorage.setItem('jwt', data.token)
                            navigate("/landingpage")
                        })
                    }
                    else {
                        response.json().then(data => {
                            console.log(data)
                        })
                    }
                })
            }} className="flex flex-colflex flex-col bg-sky-200 p-5 max-w-xl mx-auto">
            <label  className="form-label">Username</label>
            <input type="text" className="form-control px-3 py-1" id="idInput" name="username" placeholder="Enter your username"/>
            
            <label  className="form-label">Password</label>
            <input type="password" className="form-control px-3 py-1" name="password" id="nameInput" placeholder="Enter your password"/>

            <label  className="form-label">Confirm Password</label>
            <input type="password" className="form-control px-3 py-1" name="password_confirmation" id="nameInput" placeholder="Confirm your password"/>
            <button className="bg-gray-700 w-max mx-auto py-2 px-4 my-2">SignUp</button>
            </form>
        </div>
    )
} export default SignUp;