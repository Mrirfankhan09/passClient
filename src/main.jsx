import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './index.css'
// import { AuthProvider } from './context/Appcontext.jsx'
import { PasswordProvider } from './context/Passwordcontext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { AppProvider } from './context/Appcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <AuthProvider>
        <PasswordProvider>
          {/* <AuthProvider> */}
          <App />
          {/* </AuthProvider> */}
        </PasswordProvider>
      </AuthProvider>
    </AppProvider>
  </StrictMode>,
)
