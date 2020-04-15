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
      <h1>{recipe[0].title}</h1>
      <Wrapper>
        <Aside>
          <div className='food-pic'>
            <img
              src={`http://localhost:5000/uploads/${recipe[0].picture_name}`}
              alt=''
            />
          </div>
          <div id='ingredients' className='ingredients'>
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

const Wrapper = styled.div`
display:flex;
justify-content:center;

`
const Aside = styled.aside`
  img {
    width: 400px;
    height: 400px;
    border-radius: 0px;
  }
`;
const Right = styled.section`
`
const TextContainer = styled.div`

`
const Directions = styled.div`

ul li{
    list-style-type:none;
}

`

const Title = styled.p`
font-weight:bold;

span{
    font-weight:normal;
}
`
export default SingleRecipe;
