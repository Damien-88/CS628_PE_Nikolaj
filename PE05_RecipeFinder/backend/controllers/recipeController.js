import { ObjectId } from "mongodb";
import { recipesCollection } from "../db/connection.js";

// GET all recipes
export const getRecipes = async (req, res) => {
  const recipes = await recipesCollection.find().toArray();
  res.json(recipes);
};

// GET one recipe
export const getRecipe = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id || id.length !== 24) {
      return res.status(400).json({ error: "Invalid recipe id" });
    }

    const recipe = await recipesCollection.findOne({
      _id: new ObjectId(id)
    });

    res.json(recipe);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// CREATE recipe
export const addRecipe = async (req, res) => {
  const newRecipe = req.body;

  const result = await recipesCollection.insertOne(newRecipe);

  res.json(result);
};

// UPDATE recipe (partial update)
export const updateRecipe = async (req, res) => {
  const id = req.params.id;

  await recipesCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: req.body }
  );

  res.json({ message: "Recipe updated" });
};

// DELETE recipe
export const deleteRecipe = async (req, res) => {
  const id = req.params.id;

  await recipesCollection.deleteOne({
    _id: new ObjectId(id)
  });

  res.json({ message: "Recipe deleted" });
};