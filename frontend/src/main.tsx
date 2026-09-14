import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/manrope/wght.css'
import '@fontsource-variable/unbounded/wght.css'
import './index.css'
import App from './App.tsx'
import { applyTelegramChrome } from './lib/telegram'

applyTelegramChrome()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
