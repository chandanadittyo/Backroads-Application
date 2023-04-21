import React from "react";
import { pageLinks, socialLinks } from "../../data";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img
              src="/src/assets/logo.svg"
              className="nav-logo"
              alt="backroads"
            />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          {/* <!-- left this comment on purpose --> */}
          <ul className="nav-links" id="nav-links">
            {pageLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.href} className="nav-link">
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="nav-icons">
            {socialLinks.map((link) => {
              const { id, href, icon } = link;
              return (
                <a href={href} target="_blank" className="nav-icon" key={id}>
                  <i className={icon}></i>
                </a>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
