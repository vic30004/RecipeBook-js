import React, {useContext,useEffect} from 'react';
import { DashboardHeader, DahsboardContainer,Wrapper } from './DashboardHeader';
import ButtonContainer from '../../components/DashboardButtonContainer/ButtonContainer'
import Nav from '../../components/nav/Nav'
import AuthContext from '../../components/context/auth/AuthContext'
const Dashboard = (props) => {
  const authContext = useContext(AuthContext);
  const {loadUser,isAuthenticated,logout} = authContext;

  useEffect(()=>{
    if(localStorage.token){
      loadUser();
    }
  },[])

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
        <ButtonContainer logout={logout}/>
     
    </Wrapper>
  );
};

export default Dashboard;
