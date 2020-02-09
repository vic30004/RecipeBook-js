const client = require('../config/db');
const asyncHandler = require('../middleware/async');
const jwt = require('jsonwebtoken');
const path = require('path');
const config = require('config');
const fileSize = config.get('MaxFileSize');
const filePath = config.get('filePath');

exports.addRecipe = asyncHandler(async (req, res, next) => {
  const { title, cookTime, description, ingredients, directions } = req.body;
  const file = req.files;
  let pictureName = file.pictureId;
  console.log(ingredients);
  console.log(req.files);
  console.log(pictureName);

  if (
    !file.pictureId.mimetype.startsWith('image') ||
    file.pictureId.size > fileSize
  ) {
    res
      .status(400)
      .send(
        `Please upload an image file, and make sure the picture is less than ${filesize}MB!`
      );
    return;
  } else {
    const id = jwt.verify(req.token, 'dasdfc', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        return authData.id;
      }
    });
    const queryString = `INSERT INTO Recipe(user_id,title,cook_time,description,directions,picture_name) VALUES($1,$2,$3,$4,$5,$6) RETURNING *`;
    const values = [
      id,
      title,
      cookTime,
      description,
      directions,
      req.files.pictureId.name
    ];
    client
      .query(queryString, values)
      .then(data => {
        addIngredients(data.rows[0].recipe_id, ingredients);
        client.query(
          'SELECT user_id,Recipe.recipe_id,title,cook_time,description,directions,picture_name,date_added,Ingredients.ingredient FROM Recipe INNER JOIN Ingredients ON Ingredients.recipe_id = Recipe.recipe_id WHERE Recipe.recipe_id = $1',
          [data.rows[0].recipe_id],
          (err, table) => {
            if (err) {
              throw err;
            } else {
              table.rows[0].pictur_name = uploadPicture(
                data.rows[0].recipe_id,
                pictureName,
                res
              );
              res.status(200).send({
                message: 'sucess',
                data: table.rows[0]
              });
            }
          }
        );
      })
      .catch(err => console.log(err.stack));
  }
});


// TODO Add function to get all recipies



// TODO ADD function to get a single recipe 


// TODO add function to get a single users recipies




// Function to add the ingredients to the ingredients table 
function addIngredients(id, ingredients) {
  let stringIngredient = ingredients.split(',').join(',');
  let queryString =
    'Insert INTO ingredients(recipe_id,ingredient) VALUES($1,$2) RETURNING *';
  let values = [id, stringIngredient];

  client.query(queryString, values, (err, data) => {
    if (err) {
      throw err;
    } else {
      return data.rows[0].ingredient;
    }
  });
}


// Function to change the name of the photo, update the name in the db, and save it to the public folder.
function uploadPicture(id, picture, res) {
  const queryString = 'SELECT recipe_id FROM Recipe WHERE recipe_id= $1';
  const value = [id];
  let pictureName = picture.name;

  client.query(queryString, value, (err, table) => {
    if (err) {
      throw err;
    }
    pictureName = `photo_${table.rows[0].recipe_id}${
      path.parse(picture.name).ext
    }`;
    console.log(pictureName);

    picture.mv(`${filePath}/${pictureName}`, async err => {
      if (err) {
        console.error(err);
        res.status(500).send('Problem with uploaded file');
      }
      await client.query(
        'UPDATE Recipe SET picture_name =$1 WHERE recipe_id=$2',
        [pictureName, id]
      );
    });
  });
}
