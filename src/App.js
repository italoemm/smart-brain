import React, { Component } from 'react';
import 'tachyons';
import 'react-tilt';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


//css
import './App.css';

// component
import Navigation from './components/navigation/Navigation.js';
import Logo from './components/logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/imageLinkForm.js';
import FaceRecognition from './components/faceRecognition/FaceRecognition.js';
import Rank from './components/rank/Rank.js';

//json
import pc from './particlesjs-confi.json'


const app = new Clarifai.App({
    apiKey: 'c473018868f44ba99c45a4d155bb6c4d'
})

class App extends Component {
   constructor (){
       super()
       this.state = {
           input: '',
           imageUrl: ''
       }
   
   }
    
  receiveInput = (event) =>{
     this.setState({input: event.target.value})
  }
   
 receiveClick = (event) =>{
     this.setState({imageUrl: this.state.input})
    
      app.models.predict(Clarifai.COLOR_MODEL, this.state.imageUrl).then(
            function(response) {
              console.log(response)
            },
            function(err) {
              // there was an error
            }
  );
  }
  
  

  render() {
    return (
      <div className = 'App'>
         <Particles
              params={pc} className ='particles'
                />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm receiveInput={this.receiveInput} 
                       receiveClick={this.receiveClick}/>
        <FaceRecognition image={this.state.imageUrl} />
        </div>
    );
  }
}


export default App;
