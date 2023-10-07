import { InjectedConnector, StarknetConfig } from '@starknet-react/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter } from "react-router-dom";

const connectors = [
  new InjectedConnector({ options: { id: 'braavos' } }),
  new InjectedConnector({ options: { id: 'argentX' } }),
]

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StarknetConfig autoConnect connectors={connectors}>
      <HashRouter>
       <App />
      </HashRouter>
    </StarknetConfig>
  </React.StrictMode>
)
