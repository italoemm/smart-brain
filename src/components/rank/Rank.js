import React from 'react';


const Rank = ({user}) => {
    return (
        <div className ='flex flex-wrap justify-center tc mh3 white f1'>
              <p className ='mb1-ns'>{` ${user.name} your current rank is`} </p>
              <p className ='pl3'>{user.entries}</p>
       </div>  
    );
}

export default Rank;