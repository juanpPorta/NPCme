import { InjectedConnector, StarknetConfig } from '@starknet-react/core'
import { Provider, constants } from "starknet";
import { HashRouter } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const connectors = [
  new InjectedConnector( {options: { id: 'braavos' }} ),
  new InjectedConnector({ options: { id: 'argentX' } }),
]

const provider = new Provider({
  sequencer: { network: constants.NetworkName.SN_GOERLI },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StarknetConfig autoConnect connectors={connectors}
      // defaultProvider={
      //   new RpcProvider({
      //     nodeUrl:
      //       import.meta.env.INFURA_RPC ||
      //       'https://starknet-testnet.public.blastapi.io',
      //   })
      // }
      defaultProvider={provider}
      >
      <HashRouter>
       <App />
      </HashRouter>
    </StarknetConfig>
  </React.StrictMode>
)
