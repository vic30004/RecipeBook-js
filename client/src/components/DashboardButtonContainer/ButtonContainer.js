import React, { Fragment } from 'react';
import styled from 'styled-components';

const ButtonContainer = () => {
  return (
    <Fragment>
      <DashboardBtnContainer>
        <DashboardButton>
          <i class='fas fa-carrot fa-4x'></i>
          <p>All Recipes</p>
        </DashboardButton>
        <DashboardButton color='purple'>
          <i class='fas fa-user-edit fa-4x'></i>

          <p>Edit Account</p>
        </DashboardButton>
        <DashboardButton color='green'>
          <i class='fas fa-plus fa-4x'></i>

          <p>Add Recipe</p>
        </DashboardButton>
        <DashboardButton color='ivory'>
          <i class='fas fa-sign-out-alt fa-4x'></i>

          <p>Sign Out</p>
        </DashboardButton>
      </DashboardBtnContainer>
    </Fragment>
  );
};

const DashboardBtnContainer = styled.section`
  max-width: 100%;
  width: 800px;
  background: grey;
  margin: 0 auto;
  height: 300px;
  transform: translateY(-50%);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const DashboardButton = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: ${props => (props.color ? props.color : 'pink')};
  border: none;
  outline: none;
  margin: 0 1rem;
  width: 150px;
  height: 150px;
  clip-path: circle(50% at 50% 50%);
  cursor: pointer;
`;
export default ButtonContainer;
