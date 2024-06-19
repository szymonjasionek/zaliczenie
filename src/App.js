import './App.css';
import { Searchbar } from "./Searchbar.js";
import { RecipesList } from "./RecipesList.js";
import Header from "./Header.js";
import { useState } from "react";

function checkWindowSize() {
  if (window.innerWidth < 600) {
    document.body.style.backgroundColor = "lightblue";
  } else {
    document.body.style.backgroundColor = "white";
  }
}
window.addEventListener('resize', checkWindowSize);
checkWindowSize();

function App() {
  const [recipes, setRecipes] = useState([]);
  console.log("Recipes in App:", recipes);
  return (
    <div className="App">
      <Header />
      <Searchbar setRecipes={setRecipes} />
      <RecipesList recipes={recipes} />
    </div>
  );
}

export default App;
