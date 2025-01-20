import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// import * as teilen_sql from "@jsaad/teilen-sql";

// console.log(teilen_sql);

// import {createDb} from "@teilen-sql/sqlitedb.ts";

// const db = createDb("foody.db");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
