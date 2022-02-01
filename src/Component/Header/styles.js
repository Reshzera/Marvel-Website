import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: fixed;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    padding: 0 5vw;
    z-index: 3;
    border-bottom: 2px solid #e50b14;
    a img{
        object-fit: contain;
        width: 150px;
        cursor: pointer;
    }
`;
export const MobileMenuButton = styled.div`
    display: none;
    @media(max-width: 670px){
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
        position: relative;
        color: white;
        margin-left: 20px;
        width: 100px;
        cursor: pointer;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 25px;
        transition: all .2s ease-in-out;
        letter-spacing: 1px;
        :hover{
            color: darkred;
        }
    }
    @media(max-width: 670px){
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
`;
export const CounterProduct = styled.div`
    width: 20px;
    height: 20px;
    color: white;
    font-size: 15px;
    align-items: center;
    justify-content: center;
    display: ${props=> props.display === 0 ? 'none' : 'flex'};
    border-radius: 15px;
    background-color: darkred;
    z-index: 3;
    position: absolute;
    right: -5px;
    bottom: -2px;
`