const express = require('express');
const {
  addRecipe,
  getAllRecipes,
  getUsersRecipe,
  deleteRecipe,
  updateRecipe,
  findIngredients
} = require('../controller/recipe');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.post('/', protect, addRecipe);
router.get('/', getAllRecipes);
router.get('/my-recipes', protect, getUsersRecipe);
router.get('/ingredients', findIngredients);
router.delete('/:id', protect, deleteRecipe);
router.put('/:id', protect, updateRecipe);

module.exports = router;
