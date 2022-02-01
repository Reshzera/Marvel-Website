import styled, {keyframes} from 'styled-components';

const FadeIn = keyframes`
    from{
        opacity: 0;
        transform: translateY(-5%);
    }
    to{
        opacity: 1;
        transform: translateY(0%)
    }
`
export const CarrinhoContainer = styled.div`
    width: 100%;
    padding: 100px 20px;
`;
export const CarrinhoDetalhes = styled.div`
    max-width: 1500px;
    padding: 30px 50px;
    color: white;
    margin: auto;
    display: flex;
    flex-direction: column;
    background-color: #111111;
    border-radius: 10px;
    animation: ${FadeIn} .5s linear;
`;
export const ProductCarrinho  = styled.ul`
    color: white;
    list-style: none;
    font-size: 25px;
    margin-bottom: 50px;
    flex-flow: wrap;
    li{
        display: flex;
        justify-content: space-between;
        flex-flow: wrap;
        align-items: center;
        margin-top: 20px;
    }
    #title{
        max-width: 500px;
        width:100%;
        padding: 10px 0;
        color: gray;
    }

    div{
        display: flex;
        margin-bottom: 10px;
        img{
            object-fit: contain;
            align-self: center;
            height: 100px;
        }
    }
`;

export const FinalizarCompra = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    align-items: center;
    color: white;
    .Cupom{
        display: flex;
        width: 400px;
        flex-flow: wrap;
        flex-direction: row;
        align-items: center;
        margin-bottom: 100px;
        position: relative;
        span{
            color:white;
            font-size: 30px;
            margin: 0px 10px;
        }
        h1{
            position: absolute;
            bottom: -60px;
            font-size: 20px;
            color: red;
            font-weight: 100;
            text-align: center;
        }
    }
`;

export const InputCupom = styled.input`
    height: 40px;
    max-width: 150px;
    border-radius: 10px;
    border: none;
    margin: 20px 5px;
`;
export const CupomButton = styled.button`
    border-radius: 30px;
    text-decoration: none;
    text-align: center;
    font-weight: bolder;
    align-items: center;
    font-family: sans-serif;
    background-color: #62c400;
    border: none;
    padding: 10px;
    color: white;
    font-size: 15px;
    margin: 0px 5px;
    box-shadow: 3px 2px 20px 8px rgba(0,0,0,0.2);
`;

export const SubmitContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 200px;
    width: 100%;
`;

export const SubmitButton = styled.a`
    border-radius: 30px;
    width: 100%;
    text-decoration: none;
    text-align: center;
    font-weight: bolder;
    align-items: center;
    font-family: sans-serif;
    background-color: #52a6eb;
    border: none;
    padding: 10px;
    color: white;
    font-size: 15px;
    margin: 20px 5px;
    box-shadow: 3px 2px 20px 8px rgba(0,0,0,0.2);
`;

export const Price =  styled.section`
    color: ${props => props.raro ? props.DescontoRaro ? "#57ee4f"  : "white" : props.DescontoCom ? "#57ee4f"  : "white"};
`

