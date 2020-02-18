import React, { Fragment } from 'react';
const RecipeItems = ({ recipe }) => {
    const {title,cookTime,img,description,ingredients,directions}= recipe
  console.log(ingredients);
  return <Fragment>{recipe ? 
    <div className="recipe-card">
    {img ?<img className="food-picture" src={img} alt="food-picture"/> :<img src='https://toppng.com/public/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png' alt='food-placeholder'></img>}
    <div className="recipe-content">
        <h3 className="title">{title}</h3>
    <h4 id="cookTime">Cook Time: {cookTime}</h4>
    {description && (
        <p className="description">{description}</p>
    )}
    
    </div>


    </div> : ''}</Fragment>;
};

export default RecipeItems;
