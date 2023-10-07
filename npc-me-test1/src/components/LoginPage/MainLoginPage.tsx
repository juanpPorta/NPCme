import "../../styles/components/MainLoginPage.scss";
import videoBanner from "../../images/bannerVideo3.mp4";
import { NavLink } from "react-router-dom";

function MainLoginPage() {
  return (
    <main className="main_login">
      <video className="main_login_video" width="100%" loop autoPlay muted>
        <source src={videoBanner} type="video/mp4" />
      </video>
      <h1 className="main_login_main--title">Be yourself. Be others. Be me</h1>
      <h2 className="main_login_sec--title" >The world is your limit</h2>
      <h2 className="main_login_ter--title">Want to discover more? Click the button below and explore.</h2>
      <NavLink className="main_login_link" to={"/Johnlawy"}>Explore</NavLink>
    </main>
  );
}

export default MainLoginPage;