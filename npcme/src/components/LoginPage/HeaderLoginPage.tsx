import "../../styles/components/HeaderLoginPage.scss";
import NPCmeLogo from "../../images/NPCme_Logo.png";

function HeaderLoginPage() {
  return (
    <header className="header_login">
      <div className="header_login_img--wrapper"><img  className="header_login_img" src={NPCmeLogo} alt="NPCme Logo"></img></div>
      {/* <div className="header_login_img--wrapper2"><img  className="header_login_img" src={NPCmeLogo2} alt="NPCme Logo"></img></div> */}
    </header>
  );
}

export default HeaderLoginPage;
