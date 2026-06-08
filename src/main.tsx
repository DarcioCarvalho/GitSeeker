import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ToastProvider } from './contexts/ToasterContext.tsx';
import { QueryProvider } from './providers/QueryProvider.tsx';

import './scss/styles.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider>
      <QueryProvider>
        <App />
      </QueryProvider>
    </ToastProvider>
  </StrictMode>,
)
