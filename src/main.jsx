import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RandomQuote from './RandomQuote.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RandomQuote />
  </StrictMode>,
)
