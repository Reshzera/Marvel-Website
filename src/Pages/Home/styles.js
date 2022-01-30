import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    opacity: 1;
    flex-direction: column;
    max-width: 1500px;
    margin: auto;
    padding: 70px 20px;
    overflow-x: hidden;
    @media(max-width: 280px){
        padding: 20px 10px;
    }
`;
export const SectionTitle = styled.span`
    color: whitesmoke;
    display: flex;
    max-width: 350px;
    height: 70px;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: darkred;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 32px;
    margin-bottom: 40px;
    border-radius: 10px;
`;
export const CuponsAd = styled.div`
    display: flex;
    padding-top: 70px;
    background-color: #000000;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 1000px;
    z-index:-1;
    mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
    img{
        object-fit: cover;
        height:100%;
        mask-image: linear-gradient(to right, transparent 1%, black 40%)
    }
    @media(max-width: 1730px){
        height: auto;
        img{
            object-fit: contain;
            width:100%;
        }
    }
`