import React from 'react'
import ReactDOM from 'react-dom'
import App from './react/components/App'
import registerServiceWorker from './react/registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import './index.css'
import store from './store'

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root')
)
registerServiceWorker()