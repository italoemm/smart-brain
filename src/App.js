import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation.js';
import Logo from './components/logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/imageLinkForm.js';
import 'tachyons';
import 'react-tilt';

class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <Navigation/>
           <Logo/>
          <ImageLinkForm/>
             { /* <FaceRecognition/>*/}
        </div>
    );
  }
}

export default App;
