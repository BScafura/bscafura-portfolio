export default function Header({ toggleProjects }) {
  return (
    <header className="header">
      <p>B</p>
      <div className="navigation-wrapper">
        <div className="navigation-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <button>About</button>
          </li>

          <li>
            <button onClick={toggleProjects}>Portfolio</button>
          </li>
          <li>
            <button>Blog</button>
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
