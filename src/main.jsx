import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './main.css'
// import { setTheme } from './utils/DarkModeTW.js'

// setTheme(localStorage.theme)

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
