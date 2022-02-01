import styled from 'styled-components';

export const ColecaoContainer = styled.div`
    display: flex;
    opacity: 1;
    flex-direction: column; 
    max-width: 1500px;
    margin: auto;
    padding: 100px 20px;
    overflow-x: hidden;
    @media(max-width: 280px){
        padding: 100px 10px;
    }
`;

export const ColectionTitle = styled.span`
    color: white;
    display: flex;
    max-width: 200px;
    height: 70px;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: #c60000;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 32px;
    margin-bottom: 40px;
    box-shadow: 3px 3px 0px 3px #750000;
    border-radius: 10px;
`;
