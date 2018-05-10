import React from 'react';

const imageLinkForm = () => {
    return (
    <div>
        <div className ='flex justify-center mh3 '>
             <p className='f3-l f5-m '>{"This Magic Brain will detect faces in your picture. please copy and paste a Image's link"}</p>
        </div>
            
        <div className='flex flex-wrap justify-center mh3'>
                <input className= 'f4 ph3 pv2 w-70'type='text'></input>
                <button className=' grow f4 link ph3 pv2 white bg-dark-green'>Detect</button>
        </div>
            
    </div>
    );
}

export default imageLinkForm;