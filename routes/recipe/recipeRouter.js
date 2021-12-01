var express = require('express');
var router = express.Router();

const {fetchRecipe, updateRecipe, deleteRecipe, createRecipe} = require("./controller/recipeController")

/* GET home page. */
router.get("/", fetchRecipe)
router.put("/update-recipe-by-id/:id", updateRecipe)
router.post("/create-recipe", createRecipe)
router.delete("/delete-recipe-by-id/:id", deleteRecipe)

module.exports = router;