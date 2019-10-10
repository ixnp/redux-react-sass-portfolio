import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/ProjectCard';
import Skills from './components/Skills';
import './scss/main.scss';


class App extends React.Component {

  render(){
    return (
      <div  className="App">
        <Header></Header>
        <Projects></Projects>
        <Skills></Skills>
        <Contact></Contact>
        <Footer></Footer>

      </div>
    );
  }
}

export default App;
