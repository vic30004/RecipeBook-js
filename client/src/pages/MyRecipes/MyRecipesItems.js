import React from 'react'
import styled from 'styled-components';

const MyRecipesItems = ({ recipe, recipe_id }) => {
  const { title, description, cookTime} = recipe.data;
    return (
      <RecipeCards>
        <PictureContainer>
          <img
            src={`http://localhost:5000/uploads/${recipe.picture_name}`}
            alt=''
          />
        </PictureContainer>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{cookTime}</p>
      </RecipeCards>
    );
};


const RecipeCards = styled.div`
  /* padding: 1rem; */
  margin: 1rem 0.5rem;
  height: 100%;
  background: rgba(211, 211, 211,0.8);
`;

const PictureContainer = styled.div`
  width: 400px;
  height: 300px;
  img {
    width: 100%;
  }
`;
export default MyRecipesItems
