import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from "./components/LandingPage/LandingPage";
import Form from "./components/Form/Form"
import Details from './components/Details/Details';
import Home from './components/Home/Home';


export default function App() {
  return (
  
        <Routes>
          <Route exact path='/' element={<LandingPage/>} />
          <Route exact path='/home' element={<Home/>} />
          <Route exact path='/recipe' element={<Form/>} />
          <Route exact path='/recipes/:id' element={<Details/>} />
        </Routes>

  );
}

