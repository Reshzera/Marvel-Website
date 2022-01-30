import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CompraContainer = styled.div`
    display: flex;
    padding: 100px 15px 40px 15px;
    align-items: center;
    flex-direction: column;
    position: relative;
`;
export const DetalhesComic = styled.div`
    max-width: 1200px;
    width: 100%;
    padding: 50px 50px;
    display: flex;
    flex-direction: row;
    background-color: #c9c9c9;
    border-radius: 10px;
    flex-flow: wrap;
    
`;
export const HQTextContainer = styled.div`
    flex: 1 1 314px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-left: 30px;
    h2{
        text-align: center;
        font-size: 3rem;
    }
    h1{
        color: #fff;
        font-weight: 100;
        padding-bottom: 10px;
    }
    section{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 20px;
        span{
            font-size: 20px;
            padding-bottom: 20px;
        }
    }
    div{
        flex:1;
        display: flex;
        flex-flow: wrap;
        flex-direction: row;
        width: 100%;
        font-size: 20px;
        padding-top: 40px;
        align-items: center;
        justify-content: space-evenly;
        h1{
            padding-right:20px;
            text-align: center;
            text-shadow: 3px 3px #111111;
        }
    }
    
    @media(max-width: 757px){
        padding-left: 0px;
        padding-top: 40px;
    }
`;
export const HQthumbContainer = styled.div`
    flex: 1 1 314px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    img{
        object-fit: contain;
        width: 100%;
        box-shadow: 5px 5px 35px 5px rgba(0,0,0,0.89);
    }
    div{
        position: absolute;
        width: 100%;
        background-color: #0086c6;
        color: white;
        text-align: center;
        letter-spacing: 1px;
        padding: 5px;
        top: -30px;
        h1{
            font-size: 30px;
        }
    }
`;

export const AddCart = styled.button`
    border-radius: 30px;
    text-decoration: none;
    text-align: center;
    font-weight: bolder;
    align-items: center;
    font-family: sans-serif;
    background-color: #62c400;
    border: none;
    padding: 15px;
    color: white;
    font-size: 25px;
    box-shadow: 3px 2px 20px 8px rgba(0,0,0,0.2);
`;
 export const ModalButton = styled(Link)`
    border-radius: 30px;
    text-decoration: none;
    text-align: center;
    font-weight: bolder;
    align-items: center;
    font-family: sans-serif;
    background-color: ${props => props.colorb  || '#62c400' };
    border: none;
    padding: 10px;
    color: white;
    font-size: 15px;
    margin-bottom: 15px;
    box-shadow: 3px 2px 20px 8px rgba(0,0,0,0.2);
 `;

 export const ModalContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
 `;
 export const ModalImg = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    @media(max-width: 375px){
        h2{
            font-size: 20px;
        }
    }
 `

