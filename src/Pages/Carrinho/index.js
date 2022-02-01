import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CupomValidation } from '../../ValidationCupom';
import CarrinhoVazio from './CarrinhoVazio';

import { CarrinhoContainer, CarrinhoDetalhes, CupomButton, FinalizarCompra, InputCupom, Price, ProductCarrinho, SubmitButton, SubmitContainer } from './styles';

function Carrinho() {
  const CartRedux = useSelector(state => state.cart)
  
  const [Result, setResult] = useState(0)
  const [Cupom, setCupom] = useState('')
  const [Cart, setCart] = useState(CartRedux)
  const [DescontoRaro, SetDescontoRaro] = useState(false)
  const [DescontoCom, SetDescontoCom] = useState(false)
  const [Invalido, SetInvalido] = useState(false)
  
  useEffect(() =>{
    let Total = 0 
    Cart.map((Produto)=>{
      Total += Produto.prices[0].price
    })
    setResult(Total)
  },[Cart])
  useEffect(() =>{
    let Total = 0 
    Cart.map((Produto)=>{
      if(DescontoRaro && Produto.raro === true){
        Total += Produto.prices[0].desconto
      }else if (DescontoCom && Produto.raro === undefined){
        Total += Produto.prices[0].desconto
      }else{
        Total += Produto.prices[0].price
      }
    })
    setResult(Total)
  },[DescontoRaro, DescontoCom, Cart])

  function HandleCupom(){
    setCart(CupomValidation(Cart, Cupom, SetDescontoRaro, SetDescontoCom, SetInvalido))
  }

  if (Cart.length === 0){
    return(<CarrinhoVazio/>)
  }
  return (
      <CarrinhoContainer>
        <CarrinhoDetalhes>
          <ProductCarrinho>
            {Cart.map((comic, index) => 
            <li key={index}>
                <div>
                  <img src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`} />
                </div>
                <span id='title'>{comic.title} {comic.raro ? "- (HQ Rara)" : null}</span>
                <Price raro={comic.raro} DescontoRaro={DescontoRaro} DescontoCom={DescontoCom}>${comic.raro ? DescontoRaro ? comic.prices[0].desconto.toFixed(2)  : comic.prices[0].price.toFixed(2) : DescontoCom ? comic.prices[0].desconto.toFixed(2)  : comic.prices[0].price.toFixed(2)}</Price>
            </li>
            )}
          </ProductCarrinho>
          <FinalizarCompra>
            <div className='Cupom'>
              <span>Cupom: </span>
              <InputCupom value={Cupom} onChange={e => setCupom(e.target.value)}/>
              <CupomButton onClick={() => HandleCupom()}>Aplicar</CupomButton>
              {Invalido ? <h1>Este codigo de cupom é invalido</h1> : null}
            </div>
            <SubmitContainer>
              <h1>Total : ${Result.toFixed(2)}</h1>
              <SubmitButton href='/carrinho'>Finalizar</SubmitButton>
            </SubmitContainer>
          </FinalizarCompra>
        </CarrinhoDetalhes>
      </CarrinhoContainer>
  );
}

export default Carrinho;