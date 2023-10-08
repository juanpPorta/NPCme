import "../../styles/components/MainLanding.scss";
import MainHeader from "../reusables/MainHeader";
import BannerNPCPage from "./BannerUserProf";
import InfoSectionUserProf from "./InfoSectionUserProf";

function LandingUserProf(props) {
  return (
    <>
        <MainHeader />
        <BannerNPCPage/>
        <InfoSectionUserProf  requestAccepted={props.requestAccepted} setRequestAccepted={props.setRequestAccepted} requestInfo={props.requestInfo} requestDeclined={props.requestDeclined} setRequestDeclined={props.setRequestDeclined}/>
        {/* <WalletConnection /> */}
        {/* <MainFooter /> */}
    </>
  );
}

export default LandingUserProf;