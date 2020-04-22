import React, { Fragment,useEffect,useContext } from 'react';
import './Recipes.css';
import Logo from '../../images/Logo.png';
import SearchBar from '../../components/SearchBar/SearchBar';
import Nav from '../../components/nav/Nav';
import RecipeItems from './RecipeItems';
import AuthContext from '../../components/context/auth/AuthContext';
import RecipeContext from '../../components/context/recipes/RecipeContext';

export const Recipes = () => {
const authContext = useContext(AuthContext);
const recipeContext = useContext(RecipeContext);

const {loadUser,isAuthenticated} = authContext;
const {recipes,loading,savedLoaded,showRecipes,saveRecipe,showSaved,removeSavedRecipe,saved} = recipeContext

  
useEffect(() => {
  if (localStorage.token) {
    loadUser();
  }
  showSaved();
  showRecipes();
}, []);
  return loading && savedLoaded ? '': (  
    <Fragment>
      <Nav />
      <div id='recipeSearch'>
        <header className='search-container'>
        <h1 className="title">Recipe Book</h1>
          <SearchBar />
          <button className="searchBtn">Search</button>
        </header>
      </div>

      <div id='results'>
        <div className='contaienr'>
        {recipes.length>0 && !savedLoaded? recipes.map(data=>(
            <RecipeItems key={data.recipe_id} recipe={data} showRecipes={showRecipes} saved={saved} showSaved={showSaved} removeSavedRecipe={removeSavedRecipe} showRecipes={showRecipes} isAuthenticated={isAuthenticated} saveRecipe={saveRecipe}/>
        )):''}
        </div>
      </div>
    </Fragment> 

  );
};

export default Recipes;
