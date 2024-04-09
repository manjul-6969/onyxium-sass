import React from "react";

type Props = {};

const NavLinks = (props: Props) => {
  return (
    <>
      <nav role="navigation" className="navbar-menu w-nav-menu">
        <div className="navbar-menu-left">
          <a href="/" aria-current="page" className="navbar-link w-nav-link w--current">
            Home
          </a>
          <a href="/about" className="navbar-link w-nav-link">
            About
          </a>
          <a href="/pricing" className="navbar-link w-nav-link">
            Pricing
          </a>
        </div>
        <div className="navbar-menu-right">
          <a href="/log-in" className="button is-small w-button">
            Get Started
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavLinks;
