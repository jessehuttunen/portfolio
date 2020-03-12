import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './Page';
import Footter from './Footter';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Page />, document.getElementById('Page'));
ReactDOM.render(<Footter />, document.getElementById('Footter'));
serviceWorker.unregister();
