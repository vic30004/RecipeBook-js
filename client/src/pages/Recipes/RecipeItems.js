import React, { Fragment,useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RecipeItems = ({ recipe, saveRecipe, isAuthenticated,removeSavedRecipe }) => {
  const {
    title,
    cook_time,
    picture_name,
    description,
    ingredients,
    directions,
    recipe_id,
  } = recipe;

const [save,setSave] = useState(false)

  const getKey = (e) => {
    let val = e.target;
    setSave(true);
    removeSavedRecipe(val.getAttribute('data-key'))
    if(save){
        
    }else{
      saveRecipe(val.getAttribute('data-key'));  
    }

    
  };
  return (
    <Fragment>
      {recipe ? (
        <div className='recipe-card'>
          <div className='picture'>
            {picture_name ? (
              <img
                className='food-picture'
                src={`http://localhost:5000/uploads/${picture_name}`}
                alt='food-picture'
              />
            ) : (
              <img
                src='https://toppng.com/public/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png'
                alt='food-placeholder'
              ></img>
            )}
          </div>
          <div className='recipe-content'>
            <h3 className='title'>{title}</h3>
            <h4 id='cookTime'>Cook Time: {cook_time}</h4>
            {description && <p className='description'>{description}</p>}
            <Container>
              {isAuthenticated ? (
                <i
                  data-key={recipe_id}
                  onClick={(e) => getKey(e)}
                  class='fas fa-heart'
                ></i>
              ) : (
                false
              )}
              <Link to={recipe_id} className='recipeBtn'>
                View Recipe
              </Link>
            </Container>
          </div>
        </div>
      ) : (
        ''
      )}
    </Fragment>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default RecipeItems;
