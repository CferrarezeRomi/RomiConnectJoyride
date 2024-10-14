import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/index.tsx'
import GlobalStyles from './globalStyles.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles/>
    <App/>
  </StrictMode>,
)
