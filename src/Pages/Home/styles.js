import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1500px;
    margin: auto;
    padding: 40px;
    overflow-x: hidden;
    @media(max-width: 280px){
        padding: 20px 10px;
    }
`;
export const SectionTitle = styled.h1`
    color: darkred;
    font-weight: bolder;
    font-size: 50px;
    padding-bottom: 40px;
`
export const IntroMovie = styled.video`
    height: 40vh;
    width: 100%;
    background-color: #fff;
    margin-top: 40px;
`