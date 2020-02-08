const express = require('express');
const { addRecipe } = require('../controller/recipe');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.post('/', protect, addRecipe);

module.exports = router;
