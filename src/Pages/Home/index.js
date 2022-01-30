import React from 'react';

import { HomeContainer, SectionTitle, CuponsAd} from './styles';
import HQshow from '../../Component/HQshow';
import CuponsImg from '../../assets/Cupons.jpg'


function Home({HomeListHQ}) {
  
  return (
    <>
      <CuponsAd>
        <img src={CuponsImg} alt='a'/>
      </CuponsAd>
      <HomeContainer>
        <SectionTitle>Quadrinhos Mais Vendidos</SectionTitle>
        <HQshow list={HomeListHQ}/>
      </HomeContainer>
    </>
  );
}

export default Home;