import React,{Fragment} from 'react'
import styled from 'styled-components';

const ButtonContainer = () => {
    return (
        <Fragment>
        <DashboardBtnContainer>
        <button className="main-container">
          <div>
          <i class="fas fa-carrot fa-4x"></i>
              Recipe
          </div>
        </button>
        <button className="main-container">
          <div>
          <i class="fas fa-carrot fa-4x"></i>
              Recipe
          </div>
        </button>
        <button className="main-container">
          <div>
          <i class="fas fa-carrot fa-4x"></i>
              Recipe
          </div>
        </button>
        <button className="main-container">
          <div>
          <i class="fas fa-carrot fa-4x"></i>
              Recipe
          </div>
        </button>
        </DashboardBtnContainer>
        </Fragment>
    )
}

const DashboardBtnContainer = styled.section`
max-width:100%;
width:800px;
background: grey;
margin:0 auto;
height:300px;
transform:translateY(-50%);
border-radius:10px;
box-shadow: 0 0 10px rgba(0,0,0,0.6);
`

const DashboardButton = styled.button`

`
export default ButtonContainer
