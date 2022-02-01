import React from 'react';
import { CarrinhoContainer, CarrinhoDetalhes } from '../Carrinho/styles';

import { Text } from './styles';

function Sobre() {
  return (
      <CarrinhoContainer>
          <CarrinhoDetalhes>
            <h1 style={{letterSpacing: '1px', fontWeight: '300'}}>Projeto para Site de Venda de Quadrinhos</h1>
            <Text>Esse site foi desenvolvido utlizando <span style={{color:'#4495ee'}}>React.js</span>. O site está 100% responsivo, podendo ser acessado de qualquer dispositivel mobile sem problemas de interface. Para essa responsividade eu utlizei <span style={{color:'#41eb45'}}>flexbox e grid layout.</span></Text>
            <Text>Para a obtenção dos dados utilizados no site eu utilizei a <a href='https://developer.marvel.com/'>Marvel API</a>. Lendo a documentação apenas segui as recomendações e utilizei apenas o fecth para realizar a requisição</Text>
            <Text>Para a estilização do site por se tratar de um projeto React eu utilizei o <span style={{color:'#ffff4f'}}>Styled-Component</span>, para facilitar a nomeclatura e deixar o código mais limpo.</Text>
            <Text>Já para o gerenciamento de estado do site eu utilizei o <span style={{color:'#8000ff'}}>Redux</span> para armazenar os dados dos produtos vindos da API, e distriburi de forma mais pratica para o resto da aplicação.</Text>
            <h2 style={{letterSpacing: '1px', fontWeight: '300', marginTop: '30px'}}>Desenvolvido por Rafael Eitaró Oshiro</h2>
          </CarrinhoDetalhes>
      </CarrinhoContainer>
  );
}

export default Sobre;