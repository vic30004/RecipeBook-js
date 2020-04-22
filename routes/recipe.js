const express = require('express');
const {
  addRecipe,
  getAllRecipes,
  getUsersRecipe,
  deleteRecipe,
  updateRecipe,
  findIngredients,
  saveRecipe,
  showSaved,
  getSingleRecipe,
  searchIngredient,
} = require('../controller/recipe');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.post('/', protect, addRecipe);
router.get('/', getAllRecipes);
router.get('/my-recipes', protect, getUsersRecipe);
router.get('/ingredients', searchIngredient);
router.delete('/:id', protect, deleteRecipe);
router.put('/:id', protect, updateRecipe);
router.post('/save', protect, saveRecipe);
router.get('/save', protect, showSaved)
router.get('/:id',getSingleRecipe)
module.exports = router;
