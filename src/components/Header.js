import React, { forwardRef } from "react";

const Header = forwardRef(
  (
    { toggleProjects, toggleShowBlog, toggleShowHome, toggleShowAbout },
    ref
  ) => {
    return (
      <header ref={ref} className="header">
        <p>B</p>
        <div className="navigation-wrapper">
          <div className="navigation-links">
            <li>
              <button onClick={toggleShowHome}>Home</button>
            </li>
            <li>
              <button onClick={toggleShowAbout}>About</button>
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
          <a
            className="contact-button"
            href=" mailto:enzoscafura@gmail.com?subject=Hey%20Breno! "
          >
            <button className="bn632-hover bn22">Contact</button>
          </a>
        </div>
      </header>
    );
  }
);

export default Header;
