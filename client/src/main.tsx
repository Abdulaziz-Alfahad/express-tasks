import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import LoginPage from './components/LoginPage';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoginPage></LoginPage>
  </StrictMode>,
)
