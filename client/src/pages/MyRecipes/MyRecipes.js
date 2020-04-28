import React, { useContext, useEffect, Fragment } from 'react';
import RecipeContext from '../../components/context/recipes/RecipeContext';
import AuthContext from '../../components/context/auth/AuthContext';
import styled from 'styled-components';
import backgrounPic from '../../images/lukas-blazek-EWDvHNNfUmQ-unsplash.jpg';
import { Link } from 'react-router-dom';

const MyRecipes = (prop) => {
  const authContext = useContext(AuthContext);
  const recipeContext = useContext(RecipeContext);

  const { getMyRecipes, loading, recipes } = recipeContext;
  const { loadUser } = authContext;

  const { data } = recipes;

  useEffect(() => {
    if (localStorage.token) {
      loadUser();
    } else {
      prop.history.push('/');
    }
    getMyRecipes();
  }, []);

  return loading ? (
    ''
  ) : (
    <Background height={recipes.count > 0 ? '' : ''}>
      <TitleContainer>
        <h1>
          <span>My</span> Recipes
        </h1>
      </TitleContainer>

      {recipes.count > 0 ? (
        <ButtonContainer>
          <Link>Add Recipe</Link>
        </ButtonContainer>
      ) : (
        ''
      )}
    </Background>
  );
};
const greenColor = 'rgba(153, 204, 51, 0.9)';
const maxWidth = '1400px';

const Background = styled.div`
  background: url(${backgrounPic}) center center/cover no-repeat;
  height: ${(props) => (props.height ? props.height : '100vh')};
  padding: 3rem 0;
`;

const TitleContainer = styled.div`
  max-width: ${maxWidth};
  margin: 0 auto;
  background: rgba(250, 250, 250, 0.7);
  text-align: center;
  height: 100px;
  padding: 1rem;
  line-height: 2;

  h1 {
    font-family: 'Passion One', cursive;
    font-size: 3rem;
    letter-spacing: 3px;
    color: #333;
  }
  span {
    color: ${greenColor};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: rgba(250, 250, 250, 0.7); */
  max-width: ${maxWidth};
  margin: 3rem auto;
  padding: 1rem;

  a {
    text-decoration: none;
    font-size: 2rem;
    color: ${greenColor};
    background: #333;
    font-family: 'Passion One', cursive;
    padding: 0.5rem 0.75rem;
    box-shadow: 0 0 10px #333;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    box-shadow: 0 0 5px #333;
    transform: translateY(10%);
  }

  a:active {
    box-shadow: 0;
    transform: translateY(15%);
  }
`;

export default MyRecipes;
