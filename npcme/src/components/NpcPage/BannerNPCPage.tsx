import "../../styles/components/BannerNPCPage.scss";
import videoBanner from "../../images/NPCPageVideo.mp4";

function BannerNPCPage() {
  return (
    <div className="NPCPage_hero" >
      <video className="NPCPage_hero_video" width="100%" loop autoPlay muted>
        <source src={videoBanner} type="video/mp4" />
      </video>
    </div>
  );
}

export default BannerNPCPage;