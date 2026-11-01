import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/base.css'
import './styles/hero.css'
import './styles/sections.css'
import './styles/blocks.css'
import './styles/effects.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
