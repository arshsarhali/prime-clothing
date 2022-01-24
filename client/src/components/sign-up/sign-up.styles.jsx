import styled from 'styled-components';

export const SignUpContainer = styled.div`
display: flex;
flex-direction: column;
width: 380px;

@media screen and (max-width:800px){
    width:90vw;
    display:block;
    padding:20px;
    margin:auto;
    margin-top:30px;
    border-style:solid;
    }
`;