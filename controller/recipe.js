const client = require('../config/db');
const asyncHandler = require('../middleware/async');
const jwt = require('jsonwebtoken');

exports.addRecipe = asyncHandler(async (req, res, next) => {
  const {
    title,
    cookTime,
    description,
    ingredients,
    directions,
    pictureId
  } = req.body;
console.log(ingredients)
  const id = jwt.verify(req.token, 'dasdfc', (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      return authData.id;
    }
  });
  const queryString = `INSERT INTO Recipe(user_id,title,cook_time,description,directions) VALUES($1,$2,$3,$4,$5) RETURNING *`;
  const values = [id, title, cookTime, description, directions];
  client
    .query(queryString, values)
    .then(data => {
      res.status(200).send({ message: 'sucess',data:data.rows[0]});
    })
    .catch(err => console.log(err.stack));
});

function addIngredients(id,ingredient){
    let queryString = 'Insert INTO ingredients(recipe_id,ingredient'
}
