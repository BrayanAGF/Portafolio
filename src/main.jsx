import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Portfolio } from './Pages/Routes/Portfolio.jsx'
import { HashRouter } from 'react-router-dom'
import { NextUIProvider } from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { Provider } from 'react-redux'
import { store } from './Store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <NextUIProvider>
        <NextThemesProvider attribute='class' defaultTheme='light'>
          <Provider store={store}>
            <Portfolio />
          </Provider>
        </NextThemesProvider>
      </NextUIProvider>
    </HashRouter>
  </React.StrictMode>,
)
