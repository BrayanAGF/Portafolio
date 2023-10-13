import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Portfolio } from './Pages/Routes/Portfolio.jsx'
import { BrowserRouter } from 'react-router-dom'
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <Portfolio />
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
