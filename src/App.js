import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GetComicList, GetComicListByID } from './MarvelApi'

import Header from './Component/Header';

import Home from './Pages/Home';
import Carrinho from './Pages/Carrinho';
import Sobre from './Pages/Sobre';
import Compra from './Pages/Compra';
import ScrollToTop from './Component/ScrollToTop';
import Colecao from './Pages/Colecao';


function App() {
  const IronManID = 1009368;
  const HulkID = 1009351;
  const CaptainAmericaID = 1009220;
  const Thor = 1009664;
  
  const [HomeList, setHomeList] = useState([])
  const [Collection1, setCollection1] = useState([])
  const [Collection2, setCollection2] = useState([])
  const [Collection3, setCollection3] = useState([])
  const [Collection4, setCollection4] = useState([])
  
  useEffect(() => {
    GetComicList(setHomeList)
    GetComicListByID(IronManID, setCollection1)
    GetComicListByID(HulkID, setCollection2)
    GetComicListByID(CaptainAmericaID, setCollection3)
    GetComicListByID(Thor, setCollection4)
  }, [])
  return (
    <Router>
      <Header/>
      <ScrollToTop/>
      <Switch>
        <Route exact path="/">
          <Home HomeListHQ={HomeList}/>
        </Route>
        <Route path="/sobre">
          <Sobre/>
        </Route>
        <Route path="/carrinho">
          <Carrinho/>
        </Route>
        <Route path="/compra">
          <Compra/>
        </Route>
        <Route>
          <Colecao List1={Collection1} List2={Collection2} List3={Collection3} List4={Collection4} path="/colecoes"/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;