import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './Components/Todo';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Todo />, document.getElementById('root'));

serviceWorker.unregister();