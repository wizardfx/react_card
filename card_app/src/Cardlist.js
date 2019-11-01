import React from 'react';
import Card from './Card';

const Cardlist =({karthi})=>{

    const cardarray =karthi.map((user,i)=>{
        return <Card key={i} id={karthi[i].id} name={karthi[i].name} year={karthi[i].year} url={karthi[i].image}/>
    })
    return(

      
<div className='tc'>

{cardarray}

</div>
        
    )
}

export default Cardlist;