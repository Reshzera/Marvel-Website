import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Component/Header';

import Home from './Pages/Home';
import Carrinho from './Pages/Carrinho';
import Sobre from './Pages/Sobre';


function App() {
  return(
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/sobre">
          <Sobre/>
        </Route>
        <Route path="/carrinho/:id">
          <Carrinho/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;