import {NavLink} from "react-router-dom";

function NavBar(){
    return(
        <div className="flex justify-center gap-10">
           <NavLink to="/">Home</NavLink>
           <NavLink to="/about">About</NavLink>
           <NavLink to="/logIn">LogIn</NavLink>
           <NavLink to="/signUp">SignUp</NavLink>
            <NavLink to="/new-article">++Article</NavLink>

           
        </div>
    )
}
export default NavBar;