import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './store/index.js';
import { Provider } from 'react-redux';
import axios from 'axios';


axios.defaults.baseURL = 'https://food-app-production-7505.up.railway.app' 
// axios.defaults.baseURL = 'http://localhost:3001'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <BrowserRouter outer >
      <App />
    </BrowserRouter>
  </Provider>
); 



