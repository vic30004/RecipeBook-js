import React, { Fragment } from 'react';
import styled from 'styled-components';

const ButtonContainer = () => {
  return (
    <Fragment>
      <DashboardBtnContainer>
        <DashboardButton color="#d03e43">
          <i class='fas fa-carrot fa-2x'></i>
          <p>All Recipes</p>
        </DashboardButton>
        <DashboardButton color='#ff7e9f'>
          <i class='fas fa-user-edit '></i>

          <p>Edit Account</p>
        </DashboardButton>
        <DashboardButton color='#fedb94'>
          <i class='fas fa-plus'></i>

          <p>Add Recipe</p>
        </DashboardButton>
        <DashboardButton color='ivory'>
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
  padding:1rem;

  @media(max-width:600px){
    flex-flow: row wrap;
    width:400px;
    height:200px;
    transform:translateY(-20%);
    padding:0.5rem 0;
  }
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
  font-family:var(--serif-font);
  padding:0.5rem;
  transition: all 0.3s ease;
p{
    font-size:1.2rem;
    margin:0.5rem 0;
}
i{
  font-size:1.2rem;
}
:hover{
    transform:scale(1.1);
}
:focus{
    outline:none;
}

@media (max-width:600px){
  width:80px;
  height:80px;
  margin:0 0.5rem;
  p{
    font-size:0.75rem;
  }
}
`;

export default ButtonContainer;
