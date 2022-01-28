import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './Styles/globalstyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);