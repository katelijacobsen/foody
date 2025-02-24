import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { createDb } from "@jakobsaadbye/teilen-sql"
import { SqliteContext, Inspector } from "@jakobsaadbye/teilen-sql/react"

const db = await createDb("foody.db");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SqliteContext.Provider value={db}>
      <Inspector>
        <App />
      </Inspector>
    </SqliteContext.Provider>
  </StrictMode>,
)
