
import './App.css'; 
import React from 'react'
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skill/Skills';
import Exp from './components/exp/Exp';
import Project from './components/Projects/Project';

import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer.jsx';
function App() {
  return (
    < >


<Header></Header>
<main className='main'>
  <Home></Home>
  <About></About>
  <Skills></Skills>
  <Exp></Exp>
  <Project></Project>
  <Contact></Contact>
  <Footer></Footer>
</main>

    </>
  );
}

export default App;
