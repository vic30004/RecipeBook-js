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
  console.log(ingredients);
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
      addIngredients(data.rows[0].recipe_id, ingredients);
      client.query(
        'SELECT user_id,Recipe.recipe_id,title,cook_time,description,directions,pictur_id,date_added,Ingredients.ingredient FROM Recipe INNER JOIN Ingredients ON Ingredients.recipe_id = Recipe.recipe_id WHERE Recipe.recipe_id = $1',
        [data.rows[0].recipe_id],
        (err, table) => {
          if (err) {
            throw err;
          } else {
            res.status(200).send({
              message: 'sucess',
              data: table.rows[0]
            });
          }
        }
      );
    })
    .catch(err => console.log(err.stack));
});

function addIngredients(id, ingredients) {
  let stringIngredient = ingredients.join(',');
  let queryString =
    'Insert INTO ingredients(recipe_id,ingredient) VALUES($1,$2) RETURNING *';
  let values = [id, stringIngredient];

  client.query(queryString, values, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(data.rows[0].ingredient);
      return data.rows[0].ingredient;
    }
  });
}
