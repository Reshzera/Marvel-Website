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
export const SectionTitle = styled.h1`
    color: whitesmoke;
    font-weight: bolder;
    font-size: 2rem;
    padding-bottom: 40px;
`;
export const CuponsAd = styled.div`
    display: flex;
    background-color: #000000;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 1000px;
    z-index:-1;
    mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
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