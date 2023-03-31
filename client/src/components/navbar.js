import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/auth")
  };

  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/create-recipe">Create Recipe</NavLink>
      <NavLink to="/saved-recipes">Saved Recipes</NavLink>
      {!cookies?.access_token ? (
        <NavLink to="/auth">Login/Register</NavLink>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </div>
  );
};
