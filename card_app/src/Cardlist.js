import React from 'react';
import Card from './Card';

const Cardlist =({karthi})=>{

   
    return(

        <div className='tc'>  
{

  
      


karthi.map((user,i)=>{
        return (
        <Card 
        key={i}
        id={karthi[i].id} 
        name={karthi[i].name} 
        year={karthi[i].year} 
        url={karthi[i].image}
        />
        );
    })
}
</div>
        
    );
}

export default Cardlist;