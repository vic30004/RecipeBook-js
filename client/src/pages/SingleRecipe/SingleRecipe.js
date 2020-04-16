import React, { useEffect, useContext, Fragment } from 'react';
import RecipeContext from '../../components/context/recipes/RecipeContext';
import styled from 'styled-components';
import Nav from '../../components/nav/Nav'
import AuthContext from '../../components/context/auth/AuthContext';
const SingleRecipe = ({ match }) => {
  const authContext = useContext(AuthContext);
  const recipeContext = useContext(RecipeContext);
  const { getSingleRecipe, loading, recipe } = recipeContext;
  const {loadUser}= authContext

  useEffect(() => {
    if (localStorage.token) {
      loadUser();
    }
    getSingleRecipe(match.params.id);
  }, []);
  const test = (ingredients, char) => {
    let split = ingredients.split(`${char}`);
    console.log(split);
    return split;
  };
  return loading ? (
    ''
  ) : (
    <MainWrapper>
      <Nav />

      <RecipeTitle>{recipe[0].title}</RecipeTitle>
      <Wrapper>
        <Aside>
          <div className='food-pic'>
            <img
              src={`http://localhost:5000/uploads/${recipe[0].picture_name}`}
              alt=''
            />
          </div>
          <div id='ingredients' className='ingredients'>
            <h2>Ingredients</h2>
            <ul>
              {test(recipe[0].ingredient, ',').map((data) => (
                <li key={data}>{data}</li>
              ))}
            </ul>
            <Description>
              <h2>Description</h2>
              <p>{recipe[0].description}</p>
            </Description>
          </div>
        </Aside>
        <Right>
          <TextContainer>
            <Title>
              Cuisin: <span>American</span>
            </Title>
            <Title>
              Serving: <span>3</span>
            </Title>
            <Title>
              Prep Time: <span>10 minutes</span>
            </Title>
            <Title>
              Cook Time: <span>{recipe[0].cook_time}</span>
            </Title>
            <Title>
              Total Time: <span>30 minutes</span>
            </Title>
          </TextContainer>
          <Directions>
            <h2>Directions</h2>
            <ul>
              {test(recipe[0].directions, '.').map((data) => (
                <li>{data}</li>
              ))}
            </ul>
          </Directions>
        </Right>
      </Wrapper>
    </MainWrapper>
  );
};

const recipeFont = `font-family: 'Arapey', serif;`;
const TitleFont = `font-family:'Bitter', serif;`;
const MaxWidth = `width:1000px`;
const listStyling = (fontSize) =>
  `      
list-style-type:none;
      ${recipeFont};
      font-size: ${fontSize}rem;
      margin: 1rem;
      
      `;

const MainWrapper = styled.div`
  background: #333;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
  overflow: auto;

  h2 {
    ${TitleFont};
  }
`;     
const RecipeTitle = styled.h1`
${TitleFont};
  margin: 0 auto;
  ${MaxWidth};
  padding: 1rem;
  background: #ffffff;
  text-align: center;
  box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.6);
`;

const Wrapper = styled.div`
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  border-top: solid 2px #333;
  max-width: 100%;
  ${MaxWidth};
  margin: 0 auto;
  height: 100%;
  padding: 0 1rem;
  box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.6);
`;
const Aside = styled.aside`
  margin-right: 20px;
  border-right: solid 2px #333;
  padding: 2rem 1rem;
  height: 90%;
  text-align: right;

  img {
    width: 300px;
    height: 300px;
    border-radius: 0px;
    margin-bottom: 2rem;
  }

  ul {
    margin-bottom: 1rem;
  }

  ul li {
    ${listStyling(1.5)};
  }
`;
const Description = styled.section`
  margin-top: 2rem;
  h2{
    margin-bottom:1rem;
    ${TitleFont};
  }
  p{
    font-size: 1.3rem;
    ${recipeFont};
  }
`;
const Right = styled.section`
  padding: 1rem 7rem 1rem 0;
  height: 90%;
`;
const TextContainer = styled.div``;
const Directions = styled.div`
  ul li {
    ${listStyling(1.2)};
    list-style-type:decimal;
    font-size:1.5rem;
  }
`;

const Title = styled.p`
  ${TitleFont};
  line-height: 4rem;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  span {
    font-weight: normal;
    ${recipeFont};
    font-size: 1.5rem;
    padding-left: 1rem;
  }
`;
export default SingleRecipe;
