import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/Header.js';
import Socialmedia from './components/Socialmedia.js';
import Overview from './components/Overview.js';

function App() {
  return (
    <>
    <Header />
    <Socialmedia />
    <Overview />
    </>
  );
}

export default App;
