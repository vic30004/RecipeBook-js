const express = require('express');
const {
  addRecipe,
  getAllRecipes,
  getUsersRecipe
} = require('../controller/recipe');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.post('/', protect, addRecipe);
router.get('/',getAllRecipes);
router.get('/my-recipes',protect, getUsersRecipe);
module.exports = router;
