import styled from 'styled-components'

export const Wrapper = styled.div`
background:#170e11;
height:100vh;
`

export const DashboardHeader = styled.section`
display:flex;
justify-content:center;
align-items:flex-start;
height:50vh;
background:#490c12;
color:#fff;
`
export const DahsboardContainer = styled.div`
display:flex;
flex-flow: row nowrap;
align-items:center;
padding:0 1rem;
text-align:center;
margin-top:8rem;


img{
    border-radius:50%;
}

h2{
    font-family:var(--serif-font);
    letter-spacing:5px;
    font-size:2rem;
    text-transform: capitalize;
}

h1{
    font-family: var(--serif-font);
    font-size:2.3rem;
    letter-spacing:5px;
    margin-bottom:1rem;
}
.text-container{
    display:flex;
    flex-flow:column;
    width:100%;
    margin-left:1rem;
}



@media (max-width:800px){
    h2{
        font-size:1.5rem;
    }
    h1{
        font-size:1.5rem;
    }
}
`