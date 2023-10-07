import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter } from "react-router-dom";
import { goerli } from "@starknet-react/chains";
import { RpcProvider } from 'starknet';
import {
  StarknetConfig,
  InjectedConnector
} from "@starknet-react/core";

const connectors = [
  new InjectedConnector({ options: { id: 'braavos' } }),
  new InjectedConnector({ options: { id: 'argentX' } }),
];

const chains = [goerli];
const providers = [publicProvider()];
const connectors = [argent(), braavos()];
console.log(providers);
console.log(connectors);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StarknetConfig  
      connectors={connectors}
      defaultProvider={
        new RpcProvider({
          nodeUrl:
            import.meta.env.INFURA_RPC ||
            'https://starknet-testnet.public.blastapi.io',
        })}>
      <HashRouter>
       <App />
      </HashRouter>
    </StarknetConfig>
  </React.StrictMode>
)
