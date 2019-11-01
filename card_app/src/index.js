import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Cardlist from './Cardlist';
import 'tachyons';
import {karthi} from './robots.js'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(


<Cardlist karthi={karthi} />
    
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
