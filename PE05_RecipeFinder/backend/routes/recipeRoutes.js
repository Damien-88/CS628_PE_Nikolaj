import express from "express";
import {
  getRecipes,
  getRecipe,
  addRecipe,
  updateRecipe,
  deleteRecipe
} from "../controllers/recipeController.js";

const router = express.Router();

router.get("/", getRecipes);
router.get("/:id", getRecipe);
router.post("/", addRecipe);
router.patch("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);

export default router;