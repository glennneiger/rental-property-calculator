import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './react/components/App'
import registerServiceWorker from './react/registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root')
)
registerServiceWorker()