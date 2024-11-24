import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/style/index.css'
import { RootCmp } from './RootCmp.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from './components/ui/sonner'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Router>
    <RootCmp />
    <Toaster closeButton />
    </Router>
  // </StrictMode>,
)
