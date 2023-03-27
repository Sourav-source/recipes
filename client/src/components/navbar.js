import { NavLink } from "react-router-dom"

export const NavBar = () => {
    return <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create-recipe">Create Recipe</NavLink>
        <NavLink to="/saved-recipes">Saved Recipes</NavLink>
        <NavLink to="/auth">Login/Register</NavLink>
    </div>
}