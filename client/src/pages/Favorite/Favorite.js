import React, { Fragment, useContext, useEffect } from 'react';
import AuthContext from '../../components/context/auth/AuthContext';
import RecipeContext from '../../components/context/recipes/RecipeContext';

const Favorite = () => {
  const authContext = useContext(AuthContext);
  const recipeContext = useContext(RecipeContext);

  const { loadUser, isAuthenticated } = authContext;
const {showSaved,saved} = recipeContext

useEffect(()=>{
    if(localStorage.token){
      loadUser();
    showSaved()
    }
  },[])

  return <div>Hello</div>;
};

export default Favorite;
