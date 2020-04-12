import React, { Fragment,useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RecipeItems = ({showRecipes, recipe, saveRecipe,saved, isAuthenticated,removeSavedRecipe ,showSaved}) => {
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
const [temp,setTemp] = useState([])

useEffect(() => {
  if(saved.length>0){
      saved.map(save=>{
      setTemp(temp=>[...temp,save.recipe_id])  
})
  }
  return;

},[])
  const getKey = (e) => {
    window.location.reload(false);
    let val = e.target;
    saved.forEach(save=>{
        if(save.recipe_id === val.getAttribute('data-key')){
            setSave(true)
        }
    })

    if(save){
        setSave(false)
    removeSavedRecipe(val.getAttribute('data-key'))
    showSaved() 
    showRecipes()
    
    }else{
      setSave(true);  
      saveRecipe(val.getAttribute('data-key'));  
      showSaved()
      showRecipes()
      
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
                  style={temp.includes(recipe_id)?{color:'red'}:{color:'white'}}
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
