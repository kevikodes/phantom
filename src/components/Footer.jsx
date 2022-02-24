import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="navMenuFooter">
        <NavLink to="/" className={`navMenuItem`}>
          Home
        </NavLink>
        <NavLink to="/roadmap" className={`navMenuItem`}>
          Roadmap
        </NavLink>
        <NavLink to="/news" className={`navMenuItem`}>
          News
        </NavLink>
        <NavLink to="/faqs" className={`navMenuItem`}>
          FAQ's
        </NavLink>
      </div>

      <div className="copyrightText">
        &copy;2022 Phantom NFT, CleverProgrammer. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
