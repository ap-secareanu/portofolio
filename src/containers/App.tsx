import React from 'react';

import './App.css';
import '../styles/style.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Header from '../components/Header';
import Intro from './Intro';
import About from './About';
import Exp from './Exp';


function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Exp />
    </>
  );
}

export default App;
