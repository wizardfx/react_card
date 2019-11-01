import React from 'react';
import './Card.css';
const Card=(props)=>{

    return(

        <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src= {`${props.url}`} alt='images'/>
            <div >
              <h2>{props.name}</h2>  
              <p>{props.year}</p>
            </div>
        
        </div>
    );

}
export default Card