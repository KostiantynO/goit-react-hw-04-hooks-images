import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components';
// import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import { getRefs } from 'utils';
const { root } = getRefs();

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer autoClose={2500} />
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals(console.log);
