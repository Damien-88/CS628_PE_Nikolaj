import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API_BASE_URL from "../api";

function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState(null);
  const [form, setForm] = useState({
    name: "",
    ingredients: "",
    instructions: ""
  });

  useEffect(() => {
    fetch(`${API_BASE_URL}/recipes/${id}`)
      .then(res => res.json())
      .then(data => {
        setRecipe(data);
        setForm({
          name: data.name || "",
          ingredients: data.ingredients || "",
          instructions: data.instructions || ""
        });
      });
  }, [id]);

  const handleDelete = async () => {
    await fetch(`${API_BASE_URL}/recipes/${id}`, {
      method: "DELETE"
    });

    navigate("/");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    await fetch(`${API_BASE_URL}/recipes/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    alert("Updated!");
  };

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="container">
      <div className="card">
        <h2>{recipe.name}</h2>
        <p>{recipe.ingredients}</p>
        <p>{recipe.instructions}</p>

        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>

      <h3>Update Recipe</h3>

      <form onSubmit={handleUpdate}>
        <input
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <textarea
          value={form.ingredients}
          onChange={(e) =>
            setForm({ ...form, ingredients: e.target.value })
          }
        />

        <textarea
          value={form.instructions}
          onChange={(e) =>
            setForm({ ...form, instructions: e.target.value })
          }
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default RecipeDetails;