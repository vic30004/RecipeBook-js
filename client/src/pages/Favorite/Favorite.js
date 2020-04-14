import React, { Fragment, useContext, useEffect } from 'react';
import AuthContext from '../../components/context/auth/AuthContext';
import RecipeContext from '../../components/context/recipes/RecipeContext';
import { Link } from 'react-router-dom';
import FavoriteItems from './FavoriteItems';

const Favorite = () => {
  const authContext = useContext(AuthContext);
  const recipeContext = useContext(RecipeContext);

  const { loadUser, isAuthenticated } = authContext;
  const { showSaved, saved, savedLoaded } = recipeContext;

  useEffect(() => {
    if (localStorage.token && isAuthenticated) {
      loadUser();
    }
    showSaved();
  }, []);
  console.log(saved)

  return savedLoaded ? (
    ''
  ) : (
    <div>
      <h1>Favorite Recipes</h1>
      <div className='save-container'>
          {saved.length > 0 ? <FavoriteItems saved={saved}/>: <Link to="/recipe">Find a Recipe</Link>}
      </div>
    </div>
  );
};

export default Favorite;
