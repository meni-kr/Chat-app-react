import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/style/index.css'
import { RootCmp } from './RootCmp.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from './components/ui/sonner'
import { store } from './store/store'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <Router>
    <RootCmp />
    <Toaster closeButton />
    </Router>
  </Provider>
  // </StrictMode>,
)
