// react import
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// app import
import './index.css';
import Routes from './routes';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
