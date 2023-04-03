import {NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavBar({setPath, user, loginUser}){

    const navigate = useNavigate()

    return(
        <div className="bg-gray-200 border">
            <div className="flex gap-3 text-black font-medium mr-8 justify-end">
            {
                user?
           <><p>{user.username}</p><button onClick={() => {

                sessionStorage.removeItem('jwt')
                navigate("/login")
                loginUser(null)
           }}>LogOut</button> </>
            :
            <>    <NavLink onClick={() => setPath("/signup")} to="/signUp">SignUp</NavLink>
            <NavLink onClick={() => setPath("/login")} to="/logIn">LogIn</NavLink></>
            }
            </div>
            <div className="flex justify-center gap-10 text-blue-700 font-bold">
                <NavLink onClick={() => setPath("/landingpage")} to="/landingpage">Landing Page</NavLink>
                <NavLink onClick={() => setPath("/")} to="/">Home</NavLink>
                <NavLink onClick={() => setPath("/about")} to="/about">About</NavLink>
            </div>
        </div>
    )
}
export default NavBar;