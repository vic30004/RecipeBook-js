import React from 'react';
import styled from 'styled-components';

const MyRecipesItems = ({ recipe, recipe_id }) => {
  const { title, description, cookTime, prepTime } = recipe.data;
  return (
    <RecipeCards>
      <PictureContainer>
        <img
          src={`http://localhost:5000/uploads/${recipe.picture_name}`}
          alt=''
        />
        <HiddenContainer className='hidden'>
          <h2>{title}</h2>
          <p>{description}</p>
          <ButtonContainer>
            {}
            <EditButton>
              Edit <i class='fas fa-edit'></i>
            </EditButton>
            <ViewButton>
              View <i class='fas fa-search'></i>
            </ViewButton>
            <DeleteButton>
              Delete<i class='fas fa-minus-circle'></i>
            </DeleteButton>
          </ButtonContainer>
        </HiddenContainer>
      </PictureContainer>
      <TextContainer>
        <Right>
          <h3>Prep Time</h3>

          <p>{prepTime}</p>
        </Right>
        <Left>
          <h3>Cook Time</h3>

          <p>{cookTime}</p>
        </Left>
      </TextContainer>
    </RecipeCards>
  );
};
const greenColor = 'rgba(153, 204, 51, 0.9)';
const buttonBaseStyle = `  cursor: pointer;
  padding: 0.5rem;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  width: 120px;
  border:2px solid #333;
  height: 40px;`;
const RecipeCards = styled.div`
  /* padding: 1rem; */
  margin: 1rem 0.5rem;
  width: 400px;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  text-align: center;
`;

const PictureContainer = styled.div`
  width: 400px;
  height: 300px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
    opacity: 0;
    transition: all 0.7s ease-in-out;
  }
  &:hover .hidden {
    transform: scale(1);
    opacity: 1;
  }

  &:hover:before {
    opacity: 1;
  }
`;
const HiddenContainer = styled.div`
  position: absolute;
  transform: scale(0);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  color: ivory;
  z-index: 2;
  opacity: 0;
  transition: all 1s ease-in-out;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
  padding:0 1rem;
`;

const EditButton = styled.button`
  ${buttonBaseStyle};
  background: #333;
  color: ${greenColor};

`;

const ViewButton = styled.button`
  margin: 0 0.5rem;
  background: ${greenColor};
  color: #333;
  ${buttonBaseStyle};
`;

const DeleteButton = styled.button`
  background: #790604;
  ${buttonBaseStyle};
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  padding: 0.5rem 0;
  font-size: 1rem;
`;

const Right = styled.div`
  border-right: 2px solid #333;
  width: 100%;
  height: 100%;

  h3 {
    margin-bottom: 0.5rem;
  }
`;

const Left = styled.div`
  width: 100%;
  height: 100%;

  h3 {
    margin-bottom: 0.5rem;
  }
`;
export default MyRecipesItems;
