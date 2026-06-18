import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../api";

function AddRecipe() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    ingredients: "",
    instructions: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`${API_BASE_URL}/recipes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    navigate("/");
  };

  return (
    <div className="container">

      <h1>Add Recipe</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <textarea
          placeholder="Ingredients"
          onChange={(e) =>
            setForm({ ...form, ingredients: e.target.value })
          }
        />

        <textarea
          placeholder="Instructions"
          onChange={(e) =>
            setForm({ ...form, instructions: e.target.value })
          }
        />

        <button type="submit">Add</button>
      </form>

    </div>
  );
}

export default AddRecipe;