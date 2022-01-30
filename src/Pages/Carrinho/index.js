import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CarrinhoVazio from './CarrinhoVazio';

import { CarrinhoContainer, CarrinhoDetalhes } from './styles';

function Carrinho() {
  const Cart = useSelector(state => state.cart)
  console.log(Cart.length)
  if (Cart.length == 0){
    console.log('asdasd')
    return(<CarrinhoVazio/>)
  }
  return (
      <CarrinhoContainer>
        <CarrinhoDetalhes>
          <h1>dasd</h1>
        </CarrinhoDetalhes>
      </CarrinhoContainer>
  );
}

export default Carrinho;