import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Auth, CreateRecipe, Home, SavedRecipes } from "./pages";
import { NavBar } from "./components";


function App() {
  return <div className="App"> 
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/create-recipe" element={<CreateRecipe/>}/>
        <Route path="/saved-recipes" element={<SavedRecipes/>}/>
      </Routes>
    </Router>
  </div>;
}

export default App;
