import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HQcontainer = styled.div`
    width: 100%;
    margin-bottom: 50px;
`;
export const HQlist =  styled.ul`
    display: grid;
    grid-gap: 50px;
    grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
    list-style: none;
    li{
       transition: all .2s ease-in-out;
    :hover{
            transform: translateY(-4%);
        }
    }
`;
export const ComicLable = styled.div`
    display: flex;
    width: 80px;
    position: absolute;
    margin: 10px;
    height: 40px;
    border-radius: 10px;
    background-color: ${props => props.raro ? "#0086c6" : "darkred"};
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-family: 'Teko', sans-serif;
    box-shadow: 5px 5px 15px 5px #000000;
    color: white;
`;
export const LinkComic = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: whitesmoke;
    background-color: ${props => props.raro ? "#0086c6" : "darkred"};
    border-radius: 10px;
    span{
        display: flex;
        height: 60px;
        align-items: center;
        text-align: center;
        padding: 10px;
        font-size: 20px
    }
    img{
        object-fit: contain;
        width: 100%;
        @media(max-width: 425px){
            width: 100%;
        }
    }
`
