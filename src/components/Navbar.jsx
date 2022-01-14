import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarLeft">
        <h1 className="logo">Phantom</h1>
      </div>
      <div className="navbarRight">
        <div className="navMenu">
          <div className="navMenuItem">Home</div>
          <div className="navMenuItem">Whitepaper</div>
          <div className="navMenuItem">Blog</div>
          <div className="navMenuItem">FAQ's</div>
          <i className="fas fa-user-circle navAvatar"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
