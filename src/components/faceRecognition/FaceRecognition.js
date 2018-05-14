import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({image, box}) => {
    console.log('inside faceRecognition');
    console.log(box);
    if (image === ''){
        return (
       <div></div>
        );
    }else{
    return (
            <div className='cont ma2 absolute'>
                        <img id ='imageSize' src={image} style={{'width':'300px','height':'auto'}} alt='recognition' />
                        <div className = 'bounding-box' 
                            style={{
                                 'top': box.topRow,
                                 'right': box.rightCol,
                                 'bottom': box.bottomRow,
                                 'left': box.leftCol,
                                 }}></div>
            </div>
       
    );
  }
}

export default FaceRecognition;


{/*style={{
                         'top': box.topRow,
                         'right': box.rightCol,
                         'bottom': box.bottomRow,
                         'left': box.left
                    }}*/}