import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import DisclaimerPage from './pages/DisclaimerPage'
import './index.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
)