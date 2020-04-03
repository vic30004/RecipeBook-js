import React from 'react';
import { DashboardHeader, DahsboardContainer } from './DashboardHeader';
import ButtonContainer from '../../components/DashboardButtonContainer/ButtonContainer'
const Dashboard = () => {
  return (
    <div>
      <DashboardHeader>
        <DahsboardContainer className='container'>
          <img
            src='https://randomuser.me/api/portraits/men/72.jpg'
            alt='user'
          />
          <div className='text-container'>
            <h2>John Doe</h2>
            <p>Dashboard</p>
          </div>
        </DahsboardContainer>
      </DashboardHeader>
        <ButtonContainer/>
     
    </div>
  );
};

export default Dashboard;
