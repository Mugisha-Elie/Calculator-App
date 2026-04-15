import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ErrorBoundary from "./components/ErrorBoundary"

createRoot(document.getElementById('root')!, {
  onCaughtError: (error, errorInfo) => {
    if(error instanceof Error) console.log("Error Message: ", error.message)
    console.log("Component StackTrace: ", errorInfo.componentStack)
  },

  onUncaughtError: (error, errorInfo) => {
    alert("CRITICAL SYSTEM FAILURE! Sending report to base...");
    if(error instanceof Error) console.error("Critical Error", error.message)
  },

  onRecoverableError: (error, errorInfo) => {
    console.warn("React recovered from:", error)
  },
}).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
