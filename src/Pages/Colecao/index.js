import React from 'react';
import HQshow from '../../Component/HQshow';
import { SectionTitle } from '../Home/styles';
import { BackgroundColection, ColecaoContainer, ColectionTitle } from './styles';

// import { Container } from './styles';

function Colecao({List1, List2, List3, List4}) {
  return (
    <BackgroundColection>
      <ColecaoContainer>
        <ColectionTitle color1={""} color2={""} color3={""}>Homem de Ferro</ColectionTitle>
        <HQshow list={List1}/>
        <ColectionTitle>Hulk</ColectionTitle>
        <HQshow list={List2}/>
        <ColectionTitle>Capitão America</ColectionTitle>
        <HQshow list={List3}/>
        <ColectionTitle>Thor</ColectionTitle>
        <HQshow list={List4}/>
      </ColecaoContainer>
    </BackgroundColection>
  );
}

export default Colecao;