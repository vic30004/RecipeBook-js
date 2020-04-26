import React, { useContext, useEffect } from 'react';
import RecipeContext from '../../components/context/recipes/RecipeContext';
import AuthContext from '../../components/context/auth/AuthContext';

const MyRecipes = () => {
  const authContext = useContext(AuthContext);
const recipeContext = useContext(RecipeContext);
    


  return <div>hello</div>;
};

export default MyRecipes;
