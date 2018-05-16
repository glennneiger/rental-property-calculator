import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Calculator from './react/components/Calculator'
import registerServiceWorker from './react/registerServiceWorker'

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
)
registerServiceWorker()