import React from 'react';
import { CarrinhoContainer, CarrinhoDetalhes } from './styles';

// import { Container } from './styles';

function CarrinhoVazio() {
  return (
    <CarrinhoContainer>
      <CarrinhoDetalhes>
        <h1 style={{textAlign: 'center', color: 'whitesmoke', fontWeight: "100"}}>Seu carrinho está vaizo no momento</h1>
      </CarrinhoDetalhes>
    </CarrinhoContainer>
  );
}

export default CarrinhoVazio;