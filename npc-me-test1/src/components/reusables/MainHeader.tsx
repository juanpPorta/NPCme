import { NavLink } from "react-router-dom";
// import { useState } from "react";
import "../../styles/components/MainHeader.scss";
import NPCmeLogo2 from "../../images/NPCme_Logo2.png";

function MainHeader() {
  return (
    <header className="header_landing">
      <div className="header_landing_img--wrapper"><img className="header_landing_img" src={NPCmeLogo2} alt="NPCme Logo"/></div>
      {/* <div className="header_landing_img--wrapper"><img className="header_landing_img" src={NPCmeLogo} alt="NPCme Logo"/></div> */}
      <article className="header_landing_search"><input className="header_landing_search--input" type="text"></input><i className="fa fa-search header_landing_search--icon" aria-hidden="true"></i></article>
      <article className="header_landing_profile">
        <NavLink to="" className="header_landing_link1">Log in</NavLink>
        <NavLink to="" className="header_landing_link2">Sign in</NavLink>
      </article>
    </header>
  );
}

export default MainHeader;
