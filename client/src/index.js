import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './store/index.js';
import { Provider } from 'react-redux';
import axios from 'axios';


// axios.defaults.baseURL = 'http://localhost:5000/software-de-gestion-carnes/us-central1/server'
// axios.defaults.baseURL = 'https://us-central1-software-de-gestion-carnes.cloudfunctions.net/server'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <BrowserRouter outer >
      <App />
    </BrowserRouter>
  </Provider>
); 



