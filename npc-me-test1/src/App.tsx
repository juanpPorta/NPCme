import { Routes, Route } from "react-router-dom";
import LandingLoginPage from "./components/LoginPage/LandingLoginPage";
import LandingNPCPage from "./components/NpcPage/LandingNPCPage";
import LandingNPCUser from "./components/NpcUser/LandingNPCUser";
import LandingUserProf from "./components/UserProfile/LandingUserProf";
import { useState } from "react";


function App() {

  //States
  const [requestReceived, setRequestReceived] = useState(false);
  const [requestAccepted, setRequestAccepted] = useState(false);
  const [requestDeclined, setRequestDeclined] = useState(false);
  const [requestInfo, setRequestInfo] = useState({
    time: "",
    payment: 0,
    experience: ""
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingLoginPage />}></Route>
        <Route path="/Johnlawy" element={<LandingNPCPage requestReceived={requestReceived} setRequestReceived={setRequestReceived} requestInfo={requestInfo} setRequestInfo={setRequestInfo}/>}></Route>
        <Route path="/Johnlawy-profile" element={<LandingNPCUser requestReceived={requestReceived} setRequestReceived={setRequestReceived} requestInfo={requestInfo} setRequestInfo={setRequestInfo}/>}></Route>
        <Route path="/my-profile" element={<LandingUserProf requestAccepted={requestAccepted} requestInfo={requestInfo} requestDeclined={requestDeclined} setRequestDeclined={setRequestDeclined}/>}></Route>
      </Routes>
    </>
  )
}

export default App
