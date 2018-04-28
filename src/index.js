import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './react/components/App';
import registerServiceWorker from './react/registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
