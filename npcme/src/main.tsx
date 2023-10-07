import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter } from "react-router-dom";
import { goerli } from "@starknet-react/chains";
import {
  StarknetConfig,
  publicProvider,
  argent,
  braavos,
} from "@starknet-react/core";

const chains = [goerli];
const providers = [publicProvider()];
const connectors = [argent(), braavos()];
console.log(providers);
console.log(connectors);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StarknetConfig  
      chains={chains}
      providers={providers}
      connectors={connectors}>
      <HashRouter>
       <App />
      </HashRouter>
    </StarknetConfig>
  </React.StrictMode>
)
