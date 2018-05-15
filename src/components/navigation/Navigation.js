import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn){
       return (
        <nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
        <p className =' f4 link dim black underline pa3 pointer' style = {{'position':'sticky'}}
            onClick = {()=>onRouteChange('sign')}>Sign Out</p>    
        </nav>  
            );
    }else{
        return (
        <nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
        <p className =' f4 link dim black underline pa3 pointer' style = {{'position':'sticky'}}
            onClick = {()=>onRouteChange('sign')}>Sign In</p>  
        <p className =' f4 link dim black underline pa3 pointer' style = {{'position':'sticky'}}
            onClick = {()=>onRouteChange('register')}>Register</p>    
        </nav>  
            ); 
    }
   
   
}

export default Navigation;

