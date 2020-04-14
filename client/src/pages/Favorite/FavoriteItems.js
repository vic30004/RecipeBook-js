import React, { Fragment, useContext, useEffect,useState } from 'react';
import styled from 'styled-components';
import RecipeContext from '../../components/context/recipes/RecipeContext';
import AuthContext from '../../components/context/auth/AuthContext';


const FavoriteItems = (props) => {
  const { title, cook_time, picture_name, description, recipe_id } = props.saved;
    const recipeContext = useContext(RecipeContext);
    const authContext = useContext(AuthContext);
    const { loadUser, isAuthenticated } = authContext;


  const {
    showSaved,
    saveRecipe,
    savedLoaded,
      removeSavedRecipe,
    saved
  } = recipeContext;

  const [temp, setTemp] = useState([]);
    useEffect(() => {
       if (localStorage.token) {
         loadUser();
       }
        if (!savedLoaded) {
      saved.map((save) => setTemp((temp) => [...temp, save.recipe_id]));
    }
  }, []);

  const getKey = (e) => {
    window.location.reload(false);

    let val = e.target;
    let check = val.getAttribute('data-saved');
    saved.forEach((save) => {
      if (save.recipe_id === val.getAttribute('data-key')) {
        val.setAttribute('data-saved', true);
      }
    });

    if (check) {
      val.setAttribute('saved', false);
      removeSavedRecipe(val.getAttribute('data-key'));
      showSaved();
    } else {
      val.setAttribute('saved', true);
      saveRecipe(val.getAttribute('data-key'));
      showSaved();
    }
  };
  const checkIfTrue = (id) => {
    return temp.includes(id);
  };
  return (
    <Fragment>
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
                style={
                  checkIfTrue(recipe_id) ? { color: 'red' } : { color: 'white' }
                }
                data-key={recipe_id}
                data-saved={false}
                onClick={(e) => getKey(e)}
                class='fas fa-heart'
              ></i>
            ) : (
              false
            )}
          </Container>
        </div>
      </div>
    </Fragment>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default FavoriteItems;
