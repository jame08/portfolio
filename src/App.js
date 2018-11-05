import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import Intro from './components/Intro/Intro.js'

class App extends Component {
  render() {
    return (
     
     <div className="App">
      <Navbar/>
      <div className = "container">
     <Intro/>
     </div>
      </div>
    );
  }
}

export default App;
