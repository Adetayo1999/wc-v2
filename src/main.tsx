import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router } from "react-router-dom"
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Toaster position='top-right' />
    <App />
    </Router>
  </React.StrictMode>,
)
