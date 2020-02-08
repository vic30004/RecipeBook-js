const client = require('../config/db');
const asyncHandler = require('../middleware/async');
const jwt = require('jsonwebtoken');

exports.addRecipe = asyncHandler(async (req, res, next) => {
  const { title, cookTime, description, directions, pictureId } = req.body;
  const recipeTitle = title;
  const cTime = cookTime;
  const desc = description;
  const direc = directions;
  const image = pictureId;
  const id = jwt.verify(req.token, 'dasdfc', (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      return authData.id;
    }
  });
  const queryString =
    'INSERT INTO Recipe(user_id,title,cook_time,description,directions) VALUES($1,$2,$3,$4,$5)';
  const values = [id, recipeTitle, cTime, desc, direc];

  client.query(queryString, values, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.status(200).send('Recipe Added');
    }
  });
});
