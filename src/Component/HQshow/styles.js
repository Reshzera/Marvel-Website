import styled from 'styled-components';

export const HQcontainer = styled.div`
    width: 100%;
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
    height: 40px;
    border-radius: 10px;
    background-color: ${props => props.raro ? "#0086c6" : "darkred"};
    position: absolute;
    margin: 10px;
    align-items: center;
    font-weight: bolder;
    justify-content: center;
    box-shadow: 5px 5px 15px 5px #000000;
    color: white;
`;
export const LinkComic = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: whitesmoke;
    background-color: ${props => props.raro ? "#0086c6" : "darkred"};
    border-radius: 10px;
    font-weight: bolder;
    span{
        display: flex;
        height: 60px;
        align-items: center;
        text-align: center;
        padding: 10px;
    }
    img{
        object-fit: contain;
        width: 100%;
        @media(max-width: 425px){
            width: 100%;
        }
    }
`
