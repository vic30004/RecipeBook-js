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

const {loadUser} = authContext;
const {recipes,loading,showRecipes} = recipeContext

  
useEffect(()=>{
  if(localStorage.token){
    loadUser();
  }
  showRecipes()
},[])

  return (
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
        {recipes.length>0? recipes.map(data=>(
            <RecipeItems key={data.id} recipe={data}/>
        )):''}
        </div>
      </div>
    </Fragment>
  );
};

export default Recipes;
