import { Routes, Route } from "react-router-dom";
import LandingLoginPage from "./components/LoginPage/LandingLoginPage";
import LandingNPCPage from "./components/NpcPage/LandingNPCPage";
import LandingNPCUser from "./components/NpcUser/LandingNPCUser";
import LandingUserProf from "./components/UserProfile/LandingUserProf";
import { useState, useEffect } from "react";


function App() {

  //States
  const [requestReceived, setRequestReceived] = useState(false);
  const [requestAccepted, setRequestAccepted] = useState(false);
  const [requestDeclined, setRequestDeclined] = useState(false);
  const [requestInfo, setRequestInfo] = useState({
    time: "1",
    payment: 60,
    experience: "boat"
  });

  function change(data) {
    if(data.sent == true) {
      setRequestReceived(true);
      setRequestInfo(data.formInfo);
    } else if (data.action == "accepted") {
      setRequestAccepted(true);
    } else if (data.action == "declined") {
      setRequestDeclined(true);
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingLoginPage />}></Route>
        <Route path="/Johnlawy" element={<LandingNPCPage requestReceived={requestReceived} setRequestReceived={setRequestReceived} requestInfo={requestInfo} setRequestInfo={setRequestInfo} change={change}/>}></Route>
        <Route path="/Johnlawy-profile" element={<LandingNPCUser change={change} requestReceived={requestReceived} setRequestReceived={setRequestReceived} requestInfo={requestInfo} setRequestInfo={setRequestInfo} requestAccepted={requestAccepted} setRequestAccepted={setRequestAccepted} requestDeclined={requestDeclined} setRequestDeclined={setRequestDeclined}/>} ></Route>
        <Route path="/my-profile" element={<LandingUserProf requestAccepted={requestAccepted} requestInfo={requestInfo} requestDeclined={requestDeclined} setRequestDeclined={setRequestDeclined}/>}></Route>
      </Routes>
    </>
  )
}

export default App
