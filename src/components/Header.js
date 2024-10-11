import React, { forwardRef } from "react";

const Header = forwardRef(
  ({ toggleProjects, toggleShowBlog, toggleShowHome }, ref) => {
    return (
      <header ref={ref} className="header">
        <p>B</p>
        <div className="navigation-wrapper">
          <div className="navigation-links">
            <li>
              <button onClick={toggleShowHome}>Home</button>
            </li>
            <li>
              <button>About</button>
            </li>
            <li>
              <button onClick={toggleProjects}>Portfolio</button>
            </li>
            <li>
              <button onClick={toggleShowBlog}>Blog</button>
            </li>
          </div>
        </div>
        <div className="button-wrapper">
          <a className="contact-button" href="/">
            <button className="bn632-hover bn22">Contact</button>
          </a>
        </div>
      </header>
    );
  }
);

export default Header;
