import "../../styles/components/MainLanding.scss";
import MainHeader from "../reusables/MainHeader";
// import MainFooter from "../reusables/MainFooter";
import BannerNPCPage from "./BannerNPCPage";
import InfoSectionNPCPage from "./InfoSectionNPCPage";
// import WalletConnection from "../../hooks/WalletConnection";

function LandingNPCPage() {
  return (
    <>
        <MainHeader />
        <BannerNPCPage />
        <InfoSectionNPCPage />
        {/* <WalletConnection /> */}
        {/* <MainFooter /> */}
    </>
  );
}

export default LandingNPCPage;