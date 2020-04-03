import React from 'react';
import { DashboardHeader, DahsboardContainer,Wrapper } from './DashboardHeader';
import ButtonContainer from '../../components/DashboardButtonContainer/ButtonContainer'
import Nav from '../../components/nav/Nav'
const Dashboard = () => {
  return (
    <Wrapper >
    <Nav/>
      <DashboardHeader>
        <DahsboardContainer className='container'>
         
          <div className='text-container'>
          <h1>Welcome to your dashboard</h1>
            <h2>John Doe</h2>
          </div>
        </DahsboardContainer>
      </DashboardHeader>
        <ButtonContainer/>
     
    </Wrapper>
  );
};

export default Dashboard;
