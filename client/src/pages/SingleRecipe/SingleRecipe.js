import React, { useEffect, useContext, Fragment } from 'react';
import RecipeContext from '../../components/context/recipes/RecipeContext';
import styled from 'styled-components';

const SingleRecipe = ({ match }) => {
  const recipeContext = useContext(RecipeContext);
  const { getSingleRecipe, loading, recipe } = recipeContext;

  useEffect(() => {
    getSingleRecipe(match.params.id);
  }, []);
  const test = (ingredients,char) => {
      let split = ingredients.split(`${char}`);
      console.log(split)
    return split;
  };
  return loading ? (
    ''
  ) : (
    <div>
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
                          <h3>Ingredients</h3>
            <ul>
              {test(recipe[0].ingredient, ',').map((data) => (
                <li key={data}>{data}</li>
              ))}
            </ul>
            <p>{recipe[0].description}</p>
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
    </div>
  );
};

const recipeFont = `font-family: 'Arapey', serif;`;
const listStyling = (fontSize) => (
    `      
list-style-type:none;
      ${recipeFont};
      font-size: ${fontSize}rem;
      margin: 1rem;
      
      `
)

const RecipeTitle = styled.h1`
margin:0 auto;
width:1200px;
padding:1rem;
`

const Wrapper = styled.div`
background:ivory;
display:flex;
justify-content:space-between;
border-top: solid 2px #333;
max-width: 100%;
width:1200px;
margin:0 auto;
/* height:90vh; */
`;
const Aside = styled.aside`
  margin-right: 20px;
  border-right: solid 2px #333;
  padding: 2rem;
  height: 90%;
  text-align: right;

  img {
    width: 300px;
    height: 300px;
    border-radius: 0px;
    margin-bottom: 2rem;
  }

  ul{
      margin-bottom:1rem;
  }

  ul li {
    ${listStyling(1.5)};
  }
`;
const Right = styled.section`
padding:1rem 3rem;
transform: translateX(-45%);
`
const TextContainer = styled.div`

`
const Directions = styled.div`
  ul li {
    ${listStyling(1.2)};
  }
`;

const Title = styled.p`
  font-weight: bold;
  line-height: 4rem;
  margin-bottom:1rem;

  span {
    font-weight: normal;
    ${recipeFont}
  }
`;
export default SingleRecipe;
