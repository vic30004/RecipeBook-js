import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonContainer = (props) => {
  const onLogout = () => {
    props.logout();
  };

  const goToAddRecipe = () => {
    props.history.push('/addRecipe');
  };

  const goToAllRecipes = () => {
    props.history.push('/recipes');
  };

  return (
    <Fragment>
      <DashboardBtnContainer>
        <DashboardButton color='#d03e43' onClick={goToAllRecipes}>
          <i class='fas fa-carrot fa-2x'></i>
          <p>All Recipes</p>
        </DashboardButton>
        <DashboardButton color='#ff7e9f'>
          <i class='fas fa-user-edit '></i>

          <p>Edit Account</p>
        </DashboardButton>
        <DashboardButton color='#fedb94' onClick={goToAddRecipe}>
          <i class='fas fa-plus'></i>

          <p>Add Recipe</p>
        </DashboardButton>
        <DashboardButton color='ivory' onClick={onLogout}>
          <i class='fas fa-sign-out-alt '></i>

          <p>Sign Out</p>
        </DashboardButton>
      </DashboardBtnContainer>
    </Fragment>
  );
};

const DashboardBtnContainer = styled.section`
  max-width: 100%;
  width: 800px;
  background: #eff3f6;
  margin: 0 auto;
  height: 300px;
  transform: translateY(-50%);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  @media only screen 
and (min-device-width : 768px) 
and (max-device-width : 1024px)
and (-webkit-min-device-pixel-ratio: 2) { width: 650px;}

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-device-pixel-ratio: 3) {
    width: 300px;
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) {
    flex-flow: row wrap;
    width: 300px;
    height: 200px;
    transform: translateY(-20%);
    padding: 0.5rem 0;
  }
`;

const DashboardButton = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.color ? props.color : 'pink')};
  border: none;
  outline: none;
  margin: 0 1rem;
  width: 150px;
  height: 150px;
  clip-path: circle(50% at 50% 50%);
  cursor: pointer;
  font-family: var(--serif-font);
  padding: 0.5rem;
  transition: all 0.3s ease;
  p {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }
  i {
    font-size: 4rem;
  }
  :hover {
    transform: scale(1.1);
  }
  :focus {
    outline: none;
  }

  @media only screen 
and (min-device-width : 768px) 
and (max-device-width : 1024px)
and (-webkit-min-device-pixel-ratio: 2) {
  width:130px;
  height:120px;
  i {
      font-size: 1.7rem;
    }
    p {
      font-size: 1.1rem;
    }
}
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3){
width: 120px;
height:120px;

i{
  font-size:1.5rem;
}

}

  @media (max-width: 600px) {
    width: 80px;
    height: 80px;
    margin: 0 0.5rem;
    p {
      font-size: 0.75rem;
    }
    i {
      font-size: 1.2rem;
    }
  }
`;

export default ButtonContainer;
