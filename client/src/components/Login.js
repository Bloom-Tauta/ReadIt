function Login(){
    return(
        <div>
            <form className="flex flex-col bg-sky-200 p-5 max-w-xl mx-auto">
            <label  className="form-label">Username</label>
            <input type="text" className="form-control px-3 py-1" id="idInput" placeholder="Enter your username"/>
            <label  className="form-label">Password</label>
            <input type="password" className="form-control px-3 py-1" id="nameInput" placeholder="Enter your password"/>
            <button className="bg-gray-700 w-max mx-auto py-2 px-4 my-2">Login</button>
            </form>
            
        </div>
    )
} export default Login;