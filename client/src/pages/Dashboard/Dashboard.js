import React, {useContext,useEffect} from 'react';
import { DashboardHeader, DahsboardContainer,Wrapper } from './DashboardHeader';
import ButtonContainer from '../../components/DashboardButtonContainer/ButtonContainer'
import Nav from '../../components/nav/Nav'
import AuthContext from '../../components/context/auth/AuthContext'
const Dashboard = (props) => {
  const authContext = useContext(AuthContext);
  const {loadUser,isAuthenticated,logout,user} = authContext;
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
            {user!==null ? 
              <h2>{user.data[0].first_name}</h2>:false}
          </div>
        </DahsboardContainer>
      </DashboardHeader>
        <ButtonContainer logout={logout} history={props.history}/>
     
    </Wrapper>
  );
};

export default Dashboard;
