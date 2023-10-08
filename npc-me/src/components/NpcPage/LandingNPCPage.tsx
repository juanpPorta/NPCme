import "../../styles/components/MainLanding.scss";
import MainHeader from "../reusables/MainHeader";
// import MainFooter from "../reusables/MainFooter";
import BannerNPCPage from "./BannerNPCPage";
import InfoSectionNPCPage from "./InfoSectionNPCPage";
// import WalletConnection from "../../hooks/WalletConnection";

function LandingNPCUser(props) {
  return (
    <>
        <MainHeader />
        <BannerNPCPage/>
        <InfoSectionNPCPage change={props.change} requestReceived={props.requestReceived} setRequestReceived={props.setRequestReceived} setRequestInfo={props.setRequestInfo} requestInfo={props.requestInfo}/>
        {/* <WalletConnection /> */}
        {/* <MainFooter /> */}
    </>
  );
}

export default LandingNPCUser;