const client = require('../config/db');
const asyncHandler = require('../middleware/async');
const jwt = require('jsonwebtoken');
const path = require('path');
const config = require('config');
const fileSize = config.get('MaxFileSize');
const filePath = config.get('filePath');

exports.addRecipe = asyncHandler(async (req, res, next) => {
  const {
    title,
    cookTime,
    description,
    ingredients,
    directions,
    cusisine,
    prepTime,
    serving,
    totalTime,
    private,
  } = req.body;
  const file = req.files;
  console.log(ingredients);
  console.log(typeof ingredients);

  let pictureName = file.pictureId;
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
        console.log(authData);
        return authData.id;
      }
    });
    console.log(id);
    const queryString = `INSERT INTO Recipe(user_id,title,cook_time,description,directions,prep_time,serving,total_time,private,picture_name) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *`;
    const values = [
      id,
      title,
      cookTime,
      description,
      directions,
      cusisine,
      prepTime,
      serving,
      totalTime,
      private,
      req.files.pictureId.name,
    ];
    client
      .query(queryString, values)
      .then((data) => {
        addIngredients(data.rows[0].recipe_id, ingredients);
        client.query(
          'SELECT user_id,Recipe.recipe_id,title,cook_time,description,directions,prep_time,serving,total_time,private,picture_name,date_added,Ingredients.ingredient FROM Recipe INNER JOIN Ingredients ON Ingredients.recipe_id = Recipe.recipe_id WHERE Recipe.recipe_id = $1',
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
                data: table.rows[0],
              });
            }
          }
        );
      })
      .catch((err) => console.log(err.stack));
  }
});

//Function to get all recipies
exports.getAllRecipes = asyncHandler(async (req, res, next) => {
  const query =
    'SELECT user_id,Recipe.recipe_id,title,cook_time,description,directions,picture_name,date_added,Ingredients.ingredient FROM Recipe INNER JOIN Ingredients ON Ingredients.recipe_id = Recipe.recipe_id';
  try {
    const table = await client.query(query);
    res
      .status(200)
      .send({ sucess: true, count: table.rows.length, message: table.rows });
  } catch (error) {
    res.status(500).send({ erorr: error.message });
  }
});

// Function to find recipes with specific ingredients
exports.findIngredients = asyncHandler(async (req, res, next) => {
  const { ingredients } = req.body;
  const query = createParam(ingredients);
  const values = createIlikeQuery(ingredients);
  console.log(values);
  try {
    const table = await client.query(query, [values]);
    if (table.rows.length > 0) {
      res
        .status(200)
        .send({ success: true, count: table.rows.length, data: table.rows });
    } else {
      res.status(200).send({
        success: true,
        message: 'No recipes found with these ingredients!',
      });
    }
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
});

// TODO add function to get a single users recipies
exports.getUsersRecipe = asyncHandler(async (req, res, next) => {
  const id = jwt.verify(req.token, 'dasdfc', (err, authData) => {
    if (err) {
      res.sendStatus(403);
      console.log(err);
      return;
    } else {
      return authData.id;
    }
  });
  const joinQuery = `SELECT Recipe.recipe_id,title,cook_time,description,directions,picture_name,date_added,Ingredients.ingredient FROM Recipe INNER JOIN Ingredients ON Ingredients.recipe_id = Recipe.recipe_id WHERE Recipe.user_id = $1`;
  const value = [id];

  try {
    const table = await client.query(joinQuery, value);
    if (table.rows.length > 0) {
      res
        .status(200)
        .send({ success: true, count: table.rows.length, data: table.rows });
    } else {
      res.status(401).send({ success: false, message: 'No recipes found.' });
    }
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
});
// function to get single recipe
exports.getSingleRecipe = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const query =
    'SELECT Recipe.recipe_id,title,cook_time,description,directions,picture_name,date_added,Ingredients.ingredient FROM Recipe INNER JOIN Ingredients ON Ingredients.recipe_id = Recipe.recipe_id WHERE Recipe.recipe_id = $1';
  const value = [id];

  try {
    const table = await client.query(query, value);
    res.status(200).send({ message: 'success', data: table.rows });
  } catch (error) {
    res.status(400).send({ success: 'false', message: 'Invalid ID' });
  }
});

// Function to save recipe to favorite
exports.saveRecipe = asyncHandler(async (req, res, next) => {
  const { recipeId } = req.body;
  const id = jwt.verify(req.token, 'dasdfc', (err, authData) => {
    if (err) {
      res.sendStatus(403);
      console.log(err);
      return;
    } else {
      return authData.id;
    }
  });
  const firstQuery = `SELECT * FROM Favorites where (user_id=$1 AND recipe_id=$2)`;
  const removeQuery = `DELETE FROM Favorites WHERE (user_id=$1 AND recipe_id=$2)`;
  const queryString = `INSERT INTO Favorites (user_id,recipe_id) VALUES ($1,$2) RETURNING * `;
  const values = [id, recipeId];

  try {
    const check = await client.query(firstQuery, values);
    if (check.rows.length === 0) {
      try {
        const table = await client.query(queryString, values);
        if (table.rows.length > 0) {
          res.status(200).send({
            success: true,
            count: table.rows.length,
            data: table.rows,
          });
        }
      } catch (error) {
        res.status(400).send({ success: false, message: error });
      }
    } else {
      client
        .query(removeQuery, values)
        .then(() => {
          res
            .status(200)
            .send({ success: true, message: 'Recipe Deleted', data: {} });
        })
        .catch((e) => console.log(e));
    }
  } catch (error) {
    res.status(400).send({ sucess: false, message: error });
  }
});

// Query to show saved recipes according to user
exports.showSaved = asyncHandler(async (req, res, next) => {
  const id = jwt.verify(req.token, 'dasdfc', (err, authData) => {
    if (err) {
      res.sendStatus(403);
      console.log(err);
      return;
    } else {
      return authData.id;
    }
  });

  const queryString = `SELECT favorite_id,recipe_id from Favorites WHERE user_id=$1`;
  const joinQuery = `SELECT Favorites.favorite_id, Favorites.user_id, Favorites.recipe_id,
  Recipe.title,Recipe.cook_time,Recipe.description,
  Recipe.picture_name FROM Favorites INNER JOIN Recipe 
  ON Recipe.recipe_id=Favorites.recipe_id`;

  const value = [id];

  try {
    const table = await client.query(queryString, value);

    if (table.rows.length > 0) {
      try {
        const finalTable = await client.query(joinQuery);
        res.status(200).send({
          success: true,
          count: finalTable.rows.length,
          data: finalTable.rows,
        });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
    }
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
});

// function to update recipe
exports.updateRecipe = asyncHandler(async (req, res, next) => {
  const { title, cook_time, description, directions, ingredient } = req.body;
  const { id } = req.params;
  const data = {};
  const ingr = {};
  title ? (data.title = title) : false;
  cook_time ? (data.cook_time = cook_time) : false;
  description ? (data.description = description) : false;
  directions ? (data.directions = directions) : false;
  ingredient ? (ingr.ingredient = ingredient) : false;

  const colValues = Object.keys(data).map(function (key) {
    return req.body[key];
  });
  const ingValues = Object.keys(ingr).map(function (key) {
    return req.body[key];
  });
  const query = createUpdateQuery('Recipe', id, data);
  try {
    const table = await client.query(query, colValues);
    try {
      const query2 = createUpdateQuery('Ingredients', id, ingr);
      const updateIngredients = await client.query(query2, ingValues);
      try {
        const finalQuery = `SELECT Recipe.recipe_id,title,cook_time,description,directions,picture_name,date_added,Ingredients.ingredient FROM Recipe INNER JOIN Ingredients ON Ingredients.recipe_id = Recipe.recipe_id WHERE Recipe.recipe_id = $1`;
        const showUpdate = await client.query(finalQuery, [id]);
        res.status(200).send({
          success: true,
          message: 'Recipe Updates',
          data: showUpdate.rows,
        });
      } catch (error) {}
    } catch (error) {}
  } catch (error) {}
});
// function to DELETE recipe
exports.deleteRecipe = asyncHandler(async (req, res, next) => {
  const recipeId = req.params.id;
  deleteRec(recipeId, res);
});

// Function to add the ingredients to the ingredients table
function addIngredients(id, ingredients) {
  let stringIngredient = ingredients.split(',').join(',');
  let queryString =
    'Insert INTO ingredients(recipe_id,ingredient) VALUES($1,$2) RETURNING *';
  let values = [id, stringIngredient];

  client.query(queryString, values, (err, data) => {
    if (err) {
      console.log(err);
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

    picture.mv(`${filePath}/${pictureName}`, async (err) => {
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

function deleteRec(id, res) {
  const query = `DELETE FROM Recipe WHERE recipe_id=$1`;
  value = [id];
  client
    .query(query, value)
    .then(() => {
      res.status(200).send({ success: true, message: 'Recipe Deleted' });
    })
    .catch((e) => console.log(e));
}

function createUpdateQuery(tblName, id, cols) {
  var query = [`UPDATE ${tblName}`];
  query.push('SET');

  // Create another array storing each set command
  // and assigning a number value for parameterized query
  var set = [];
  Object.keys(cols).forEach(function (key, i) {
    set.push(key + ' = ($' + (i + 1) + ')');
  });
  query.push(set.join(', '));

  // Add the WHERE statement to look up by id
  if (tblName.toLowerCase() === 'recipe') {
    query.push(`WHERE recipe_id = ${id} RETURNING *`);
  } else {
    query.push(`WHERE recipe_id = ${id}`);
  }

  // Return a complete query string
  return query.join(' ');
}

function createParam(ingredients) {
  let newArr = [];
  let query = `SELECT Recipe.recipe_id,title,cook_time,description,directions,picture_name,date_added,Ingredients.ingredient 
FROM Recipe 
INNER JOIN Ingredients ON Ingredients.recipe_id = Recipe.recipe_id
WHERE ingredient ILIKE `;
  for (let i = 0; i < arguments.length; i++) {
    newArr.push(`$${i + 1}`);
  }
  return `${query}(${newArr.join(', ')})`;
}

// Function to create ILIKE query
function createIlikeQuery(str) {
  let splitRecipe = str.split(',');
  let newArr = [];
  let finalStr = '';
  if (
    str.toLowerCase().includes('select') ||
    str.toLowerCase().includes('insert') ||
    str.toLowerCase().includes('delete') ||
    str.toLowerCase().includes('update') ||
    str.toLowerCase().includes('drop')
  ) {
    return;
  } else {
    for (let i = 0; i < splitRecipe.length; i++) {
      newArr.push(`%${splitRecipe[i]}%`);
      finalStr = newArr.join(',');
    }
    return `${finalStr}`;
  }
}
