import React, { useEffect, useState } from 'react';

import { GetComicList } from '../../MarvelApi'

import { HomeContainer, SectionTitle, CuponsAd} from './styles';
import HQshow from '../../Component/HQshow';
import CuponsImg from '../../assets/Cupons.jpg'


function Home() {
  const [List, setList] = useState([])
  
  function AtribuirRaro(len, array){
    for(let i=0; i < len*0.1; i++){
      const number = Math.floor(Math.random() * len)
      array[number].raro = true
    }
    return array
  }
  
  useEffect(() => {
    fetch(GetComicList)
      .then(response => response.json())
      .then(data => data.data.results.filter(comic => comic.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"))
      .then(filtred => AtribuirRaro(filtred.length, filtred))
      .then(list => setList(list))
  }, [])
  return (
    <>
      <CuponsAd>
        <img src={CuponsImg} alt='a'/>
      </CuponsAd>
      <HomeContainer>
        <SectionTitle>Quadrinhos Mais Vendidos</SectionTitle>
        <HQshow list={List} />
      </HomeContainer>
    </>
  );
}

export default Home;