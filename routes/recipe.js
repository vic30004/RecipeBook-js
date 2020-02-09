const express = require('express');
const { addRecipe, getAllRecipes } = require('../controller/recipe');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.post('/', protect, addRecipe);
router.get('/', getAllRecipes);
module.exports = router;
