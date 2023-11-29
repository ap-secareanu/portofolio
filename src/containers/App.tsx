import React from 'react';

import './App.css';
import '../styles/style.scss';
import '../styles/hambuger.min.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Header from '../components/Header';
import Intro from './Intro';
import About from './About';
import Exp from './Exp';
import Edu from './Edu';
import Contact from './Contact';
import Footer from '../components/Footer';
import Social_Icons from '../components/Social_Icons';
import Hamburger_Menu from '../components/Hamburger_Menu';
import Go_To_Section from '../components/Go_To_Section';


function App() {
  return (
    <>
      <Header menu={Hamburger_Menu} scroll={Go_To_Section} />
      <Intro />
      <About />
      <Exp />
      <Edu />
      <Contact />
      <Social_Icons />
      <Footer />
    </>
  );
}

export default App;
