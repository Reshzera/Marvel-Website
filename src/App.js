import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GetComicList } from './MarvelApi'

import Header from './Component/Header';

import Home from './Pages/Home';
import Carrinho from './Pages/Carrinho';
import Sobre from './Pages/Sobre';
import Compra from './Pages/Compra';
import ScrollToTop from './Component/ScrollToTop';


function App() {
  const [List, setList] = useState([])
  
  useEffect(() => {
    GetComicList(setList)
  }, [])
  return (
    <Router>
      <Header/>
      <ScrollToTop/>
      <Switch>
        <Route exact path="/">
          <Home HomeListHQ={List}/>
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
      </Switch>
    </Router>
  );
}

export default App;