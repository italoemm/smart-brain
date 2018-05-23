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
import Sign from './components/sign/Sign.js';
import Register from './components/register/Register.js';

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
           box:{},
           route: 'sign',
           isSignedIn: false,
           user: {
                   id:'',
                   name: '',
                   email: '',
                   entries: '',
                   joined:''
                  }
       }
   
   }

  loadUser = (data) =>{
        const {id, name, email, entries, joined} = data
          this.setState({ user: {
                                id:id,
                                name:name,
                                email:email,
                                entries:entries,
                                joined:joined }
                        })
                          
      console.log(this.state.user)
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
      
       fetch('http://localhost:3001/image', {
                    method: 'put',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify ({
                        id: this.state.user.id
                    })
                }).then((response) => response.json())
                  .then((count) => Object.assign(this.state.user, {entries: count}))

    }
 
  onRouteChange = (route) => {
      if((route === 'register') || (route === 'sign')){
          this.setState({isSignedIn: false})
      }else if(route === 'home'){
          this.setState({isSignedIn: true})
        }
               this.setState({route: route})
                console.log(this.state.isSignedIn)
    }
  
  render() {
     const {isSignedIn, box, imageUrl, route, user} = this.state;
      
    return (
      <div className = 'App'>
            { /*<Particles
              params={pc} className ='particles'
                />*/}
        <Navigation  onRouteChange = {this.onRouteChange} isSignedIn = {isSignedIn} />
        {route === 'sign'
        ? <Sign onRouteChange = {this.onRouteChange} loadUser={this.loadUser} />
            : (route === 'register')
                ? <Register onRouteChange = {this.onRouteChange} loadUser={this.loadUser} />
                :<div>
                 <Logo />

                 <Rank user ={user} />
                 <ImageLinkForm receiveInput={this.receiveInput} 
                               receiveClick={this.receiveClick}/>
                 <FaceRecognition image={imageUrl} box={box} />
                 </div> }
        </div>
    );
  }
}


export default App;



/* when we are using the same properties (function) of class App to more than one components we have call this properties through a function
    onClick={()=> onRouteChange('register')}
*/