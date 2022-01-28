import React, { useEffect, useState } from 'react';

import { GetComicList } from '../../MarvelApi'

import { HomeContainer, SectionTitle, IntroMovie } from './styles';
import HQshow from '../../Component/HQshow';

import Intro from '../../assets/intro.mp4'


function Home() {
  const [List, setList] = useState([])

  const getcomiclist = async () => {
    fetch(GetComicList)
      .then(response => response.json())
      .then(data => setList(data.data.results.filter(comic => comic.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available")));
  }

  useEffect(() => {
    getcomiclist()
  }, [0])
  return (
    <>
      <IntroMovie autoplay muted loop>
        <source src={Intro} type="video/mp4"/>
      </IntroMovie>
      <HomeContainer>
        <SectionTitle>Trending Comics</SectionTitle>
        <HQshow list={List} />
      </HomeContainer>
    </>
  );
}

export default Home;