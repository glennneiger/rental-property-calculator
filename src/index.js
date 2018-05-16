import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CalculatorPage from './react/components/CalculatorPage'
import registerServiceWorker from './react/registerServiceWorker'

ReactDOM.render(
  <CalculatorPage />,
  document.getElementById('root')
)
registerServiceWorker()