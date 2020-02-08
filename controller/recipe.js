const client = require('../config/db');
const asyncHandler = require('../middleware/async');

exports.addRecipe = asyncHandler(async (req, res, next) => {
  const { title, cookTime, descriptions, directions, pictureId } = req.body;
  const recipeTitle = title;
  const cTime = cookTime;
  const desc = descriptions;
  const direc = directions;
  const image = pictureId;

  const queryString =
    'INSERT INTO recipe(title,cook_time,decription,directions)';
  const values = [recipeTitle, cTime, desc, direc];

  client.query(queryString, values, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.status(200).send('Recipe Added');
    }
  });
});
