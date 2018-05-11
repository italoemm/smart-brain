import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';

const Logo = () => {
    return (
    <div className='ma4 mt0'>
    <Tilt className="Tilt br2 shadow-2" 
          options={{ max : 75 }} 
          style={{ 'height': '10%', 'width': '10%', 
                   'background':'linear-gradient(to right, rgb(20, 255, 0) , rgba(86, 250, 72, 0.69), rgba(255,0,0,0))'}} >
    <div className="Tilt-inner b--dark-green"> <img src={brain}></img></div>
    </Tilt>
    </div>
    );
}

export default Logo;