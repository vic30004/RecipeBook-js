import React, { Fragment, useContext, useEffect } from 'react';
import AuthContext from '../../components/context/auth/AuthContext';
import RecipeContext from '../../components/context/recipes/RecipeContext';
import { Link } from 'react-router-dom';
import FavoriteItems from './FavoriteItems';
import Nav from '../../components/nav/Nav';
import styled from 'styled-components';


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
  console.log(saved);

  return savedLoaded ? (
    ''
  ) : (
      <Wrapper>
        <Nav/>
      <h1>Favorite Recipes</h1>
      <div className='save-container'>
        {saved.length > 0? (
          saved.map((save) => (
            <FavoriteItems saved={save} key={save.favorite_id} />
          ))
        ) : (
          <Link to='/recipe'>Find a Recipe</Link>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
margin:0;
text-align:center;
`

export default Favorite;
