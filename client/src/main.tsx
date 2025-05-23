import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import './index.css'
import { UserProvider } from './context/UserContext';

import LoginPage from './components/LoginPage';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
    <App />
    </UserProvider>
  </StrictMode>
)
