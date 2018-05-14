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
    apiKey: 'a6f8a93f608e442382f91aa8b76bd5ec'
})

class App extends Component {
   constructor (){
       super()
       this.state = {
           imageUrl: '',
           box:{}
       }
   
   }

  calculatebox = (response) => {
      console.log(response)
      const clarifaiFace = response.outputs[0].data.regions[0].region_info.bounding_box;
      const imageSize = document.getElementById("imageSize");
      
      const width = Number(imageSize.width);
      const height = Number(imageSize.height);
  
      const clariBox = {
          leftCol: clarifaiFace.left_col * width,
          topRow: clarifaiFace.top_row * height,
          rightCol: width - (clarifaiFace.right_col * width) ,
          bottomRow: height - (clarifaiFace.bottom_row * height)
      }
      
    this.setState({box: clariBox})
  }
    
  receiveInput = (event) =>{
     this.setState({imageUrl: event.target.value})
  }
   
  receiveClick = (event) =>{ 
      
      app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.imageUrl)
          .then(response => this.calculatebox(response))
          .catch(err => console.log(err))
  }
  

  render() {
    return (
      <div className = 'App'>
            {/* <Particles
              params={pc} className ='particles'
                />*/}
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm receiveInput={this.receiveInput} 
                       receiveClick={this.receiveClick}/>
        <FaceRecognition image={this.state.imageUrl} box={this.state.box} />
        </div>
    );
  }
}


export default App;
