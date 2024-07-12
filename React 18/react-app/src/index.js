import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
// 设置移动端适配
document.documentElement.style.fontSize = 100 / 750 + 'vw'

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
