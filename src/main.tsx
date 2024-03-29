import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/Pages/App.tsx'
import '@/assets/styles/reset.css'
import '@/assets/styles/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
