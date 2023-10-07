import "../../styles/components/MainLanding.scss";
import MainHeader from "../reusables/MainHeader";
// import MainFooter from "../reusables/MainFooter";
import BannerNPCPage from "./BannerNPCPage";
import InfoSectionNPCPage from "./InfoSectionNPCPage";

function LandingNPCPage() {
  return (
    <>
        <MainHeader />
        <BannerNPCPage />
        <InfoSectionNPCPage />
        {/* <MainFooter /> */}
    </>
  );
}

export default LandingNPCPage;