import { NavLink } from "react-router-dom";
// import { useState } from "react";
import "../../styles/components/MainFooter.scss";

function MainFooter() {
  return (
    <footer className="footer_landing">
      <section className="footer_landing_section1">
        <article className="footer_landing_article1">
          <NavLink to="" className="footer_landing_link">Privacy policy</NavLink>
          <NavLink to="" className="footer_landing_link">Terms and conditions</NavLink>
          <NavLink to="" className="footer_landing_link">Legal bases</NavLink>
          <NavLink to="" className="footer_landing_link">Cookies</NavLink>
        </article>
        <article className="footer_landing_article2">
          {/* <NavLink className="footer_landing_link"><i className="fa fa-linkedin-square" aria-hidden="true"></i></NavLink>
          <NavLink className="footer_landing_link"><i className="fa fa-youtube-play" aria-hidden="true"></i></NavLink>
          <NavLink className="footer_landing_link"><i className="fa fa-instagram" aria-hidden="true"></i></NavLink>
          <NavLink className="footer_landing_link"><i className="fa fa-github" aria-hidden="true"></i></NavLink> */}
        </article>
      </section>
      <small className="footer_landing_copy">NPCme ©</small>
    </footer>
  );
}

export default MainFooter;