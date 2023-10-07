import { Routes, Route } from "react-router-dom";
import LandingLoginPage from "./components/LoginPage/LandingLoginPage";
import LandingNPCPage from "./components/NpcPage/LandingNPCPage";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingLoginPage />}></Route>
        <Route path="/Johnlawy" element={<LandingNPCPage />}></Route>
      </Routes>
    </>
  )
}

export default App
