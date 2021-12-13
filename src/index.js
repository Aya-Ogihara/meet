import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
//import reportWebVitals from './reportWebVitals';

import * as atatus from 'atatus-spa';
atatus.config('7402f2d6dd664d68b54d6fa52bb9a1ac').install();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

serviceWorkerRegistration.register();