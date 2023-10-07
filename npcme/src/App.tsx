// import { useBlock } from '@starknet-react/core'
// import WalletBar from './components/WalletBar'
import { Routes, Route } from "react-router-dom";
import LandingLoginPage from "./components/LoginPage/LandingLoginPage";

function App() {
  // const { data, isLoading, isError } = useBlock({
  //   refetchInterval: 3000,
  //   blockIdentifier: 'latest',
  // })

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingLoginPage />}></Route>
      </Routes>
      {/* <p>
        Get started by editing&nbsp;
        <code>pages/index.tsx</code>
      </p>
      <div>
        {isLoading
          ? 'Loading...'
          : isError
          ? 'Error while fetching the latest block hash'
          : `Latest block hash: ${data?.block_hash}`}
      </div> */}
      {/* <WalletBar /> */}
    </>
  )
}

export default App
