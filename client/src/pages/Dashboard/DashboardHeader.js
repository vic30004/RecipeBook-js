import styled from 'styled-components'


export const DashboardHeader = styled.section`
display:flex;
justify-content:flex-start;
align-items:center;
height:30vh;
background:#333;
color:#fff;
`
export const DahsboardContainer = styled.div`
display:flex;
flex-flow: row nowrap;
align-items:center;
width:300px;
padding:0 1rem;

img{
    border-radius:50%;
}

h2{
    font-family:var(--serif-font);
    letter-spacing:3px;
}

p{
    font-family: var(--san-serif-font);
    font-size:1.5rem;
}
.text-container{
    display:flex;
    flex-flow:column;
    width:100%;
    margin-left:1rem;
}
`