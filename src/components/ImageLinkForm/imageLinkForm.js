import React from 'react';

const imageLinkForm = ({receiveInput, receiveClick}) => {
    return (
    <div>
        <div className ='flex justify-center mh3  '>
             <p className='f3-l f5-m'>{"This Magic Brain will detect faces in your picture. please copy and paste a Image's link"}</p>
        </div>
            
        <div className='flex flex-wrap justify-center mh3 '>
                <div className = 'br4 shadow-5 pa2 tc' style={{'background':'linear-gradient(to right, rgb(20, 255, 0) , rgba(86, 250, 72, 0.69), rgba(255,0,0,0))', 'position':'sticky'}}>
                    
                    <input className= 'f4 ph7-l pv2 w-90 ' onChange={receiveInput} type='text'></input>
                    <button className=' grow f4 link ph3 pv2 white bg-dark-green' onClick= {receiveClick} >Detect</button>
                    
                </div>
        </div>
            
    </div>
    );
}

export default imageLinkForm;

{/*http://lea.verou.me/css3patterns/*/}