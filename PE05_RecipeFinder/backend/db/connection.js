import dotenv from "dotenv";
dotenv.config();

import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.ATLAS_URI);

await client.connect();

export const db = client.db("recipeDB");
export const recipesCollection = db.collection("recipes");