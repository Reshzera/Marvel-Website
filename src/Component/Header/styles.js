import styled from 'styled-components';

export const HeaderContainer = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #b11100;
    -webkit-box-shadow: 1px 11px 17px 3px rgba(0,0,0,0.62); 
    box-shadow: 1px 11px 17px 3px rgba(0,0,0,0.62);
    padding: 0 5vw;
    
    a img{
        object-fit: contain;
        min-width: 150px;
        max-width: 8vw;
        cursor: pointer;
    }
`;
export const MobileMenuButton = styled.div`
    display: none;
    @media(max-width: 600px){
        display: block;
        z-index: 3;
        transform: ${props => props.show ? "rotate(180deg)" : "rotate(0deg)"};
        transition: all .2s ease-in-out;
    }
`;

export const PageLink = styled.ul`
    display: flex;
    list-style: none;
    li a{
        color: white;
        padding-left: 20px;
        width: 80px;
        cursor: pointer;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    @media(max-width: 600px){
        position: fixed;
        z-index: 1;
        height: 100vh;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: min(75vw, 400px);
        top: 0px;
        right: -1px;
        background-color: #202020;
        -webkit-box-shadow: -10px 0px 30px 0px rgba(0,0,0,0.69); 
        box-shadow: -10px 0px 30px 0px rgba(0,0,0,0.69);
        transform: ${props => props.show ? "translateX(0%)" : "translateX(100%)"};
        opacity: ${props => props.show ? "1" : "0"};
        transition: all .2s ease-in-out;
        li a{
        color: white;
        padding-left: 0px;
        }
    }
`