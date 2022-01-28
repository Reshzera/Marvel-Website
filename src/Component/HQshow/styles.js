import styled from 'styled-components';

export const HQcontainer = styled.div`
    width: 100%;
`;
export const HQlist =  styled.ul`
    display: grid;
    grid-gap: 50px;
    grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
    list-style: none;
    li a{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: black;
        span{
        padding-top: 25px;
        }
    }
    li img{
        object-fit: contain;
        width: 250px;
        transition: all .2s ease-in-out;
        :hover{
            transform: scale(1.1)
        }
        @media(max-width: 425px){
            width: 100%;
        }
    }

`;
