import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import 'tachyons';
import {karthi} from './robots.js'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<div className='tc'><Card id={karthi[0].id} name={karthi[0].name} year={karthi[0].year} url={karthi[0].image}/>


</div>


    
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
