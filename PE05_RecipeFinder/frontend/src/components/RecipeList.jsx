import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_BASE_URL from "../api";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/recipes`)
      .then(res => res.json())
      .then(data => {
        setRecipes(Array.isArray(data) ? data : []);
      })
      .catch(err => {
        console.error(err);
        setRecipes([]);
      });
  }, []);

  const handleDelete = async (id) => {
    await fetch(`${API_BASE_URL}/recipes/${id}`, {
      method: "DELETE"
    });

    setRecipes(prev => prev.filter(r => r._id !== id));
  };

  return (
    <div className="container">
      <h1>Recipe List</h1>

      <Link to="/add">➕ Add Recipe</Link>

      {recipes.map(recipe => (
        <div key={recipe._id} className="card">
          <Link to={`/recipes/${recipe._id}`}>
            <h3>{recipe.name}</h3>
          </Link>

          <p>{recipe.ingredients}</p>

          <div className="actions">
            <Link to={`/recipes/${recipe._id}`}>
              <button>Edit</button>
            </Link>

            <button
              className="delete"
              onClick={() => handleDelete(recipe._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;