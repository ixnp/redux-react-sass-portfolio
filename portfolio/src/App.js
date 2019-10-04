import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './scss/main.scss';


function App() {
  return (
    <div className="App">
     
    <Header></Header>
    <Projects></Projects>
    <Skills></Skills>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  );
}

export default App;
