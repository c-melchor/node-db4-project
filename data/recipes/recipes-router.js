const express = require("express");
const Recipes = require("./recipes-model.js");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipes.getAll();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
