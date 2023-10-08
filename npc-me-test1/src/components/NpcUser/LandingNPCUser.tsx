import "../../styles/components/MainLanding.scss";
import MainHeader from "../reusables/MainHeader";
// import MainFooter from "../reusables/MainFooter";
import BannerNPCUser from "./BannerNPCUser";
import InfoSectionNPCUser from "./InfoSectionNPCUser";
// import WalletConnection from "../../hooks/WalletConnection";

function LandingNPCUser(props) {
  return (
    <>
        <MainHeader />
        <BannerNPCUser />
        <InfoSectionNPCUser requestInfo={props.requestInfo} setRequestInfo={props.setRequestInfo} requestReceived={props.requestReceived} setRequestReceived={props.setRequestReceived}/>
        {/* <WalletConnection /> */}
        {/* <MainFooter /> */}
    </>
  );
}

export default LandingNPCUser;