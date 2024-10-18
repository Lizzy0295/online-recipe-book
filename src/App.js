import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import recipes from "./mockData";

function App() {
  const [query, setQuery] = useState("");
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Online Recipe Book</h1>
      <p>Find delicious recipes from all around the world</p>{" "}
      {/* Added subtitle */}
      <SearchBar setQuery={setQuery} />
      <div className="recipe-cards">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
