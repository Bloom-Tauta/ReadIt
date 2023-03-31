import {NavLink} from "react-router-dom";

function NavBar(){
    return(
        <div className="flex justify-center gap-10 border border-gray-300">
           <NavLink to="/">Home</NavLink>
           <NavLink to="/about">About</NavLink>
           <NavLink to="/logIn">LogIn</NavLink>
           <NavLink to="/signUp">SignUp</NavLink>
            <NavLink to="/logout">LogOut</NavLink>
            <NavLink to="/new-article">New Article</NavLink>

           
        </div>
    )
}
export default NavBar;