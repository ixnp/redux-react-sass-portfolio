import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/ProjectCard';
import Skills from './components/Skills';
import './scss/main.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      myRef:null
    };
  }
  
componentDidMount = () => {
  window.addEventListener('scroll', this.handleScroll);
}

// handleScroll = (event) => {
//   console.log(window.scrollTo(0, 0))
// console.log(this.state.count)
//   this.setState({count: this.state.count+=1})
// }
scrollToMyRef = () => {
 
  window.scrollTo(0, 1000)
}
  render(){
    return (
      <div ref={ref => (this.myRef = ref)}  className="App">
        <Header></Header>
        <Projects></Projects>
        <Skills></Skills>
        
        <Contact></Contact>
        <Footer></Footer>
        <button onClick={this.scrollToMyRef}>test</button>
      </div>
    );
  }
}

export default App;
