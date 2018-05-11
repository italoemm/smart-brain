import React from 'react';

const FaceRecognition = ({image}) => {
    if (image === ''){
        return (
        <div></div>
        );
    }else{
    return (
    <div className='tc ma2' >
        <img src={image} style={{'position':'sticky'}} alt='recognition' ></img>
    </div>
       
    );
  }
}

export default FaceRecognition;
