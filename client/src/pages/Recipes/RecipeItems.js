import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'
const RecipeItems = ({ recipe }) => {
    const {title,cookTime,img,description,ingredients,directions,id}= recipe
  console.log(id);
  return <Fragment>{recipe ? 
    <div className="recipe-card">
    <div className="picture">
    {img ?<img className="food-picture" src={img} alt="food-picture"/> :<img src='https://toppng.com/public/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png' alt='food-placeholder'></img>}
    </div>
    <div className="recipe-content">
        <h3 className="title">{title}</h3>
    <h4 id="cookTime">Cook Time: {cookTime}</h4>
    {description && (
        <p className="description">{description}</p>
    )}
    <Link to={id} className="recipeBtn">View Recipe</Link>
    </div>


    </div> : ''}</Fragment>;
};

export default RecipeItems;
