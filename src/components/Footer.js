import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faOrcid,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";

export function Footer() {
  const actualDate = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="text-wrapper">
        <p>&copy; {actualDate} - Breno Scafura.</p>
      </div>
      <div className="links-container">
        <div className="social-media-wrapper">
          <a href="">
            <FontAwesomeIcon className="header-icon" icon={faGithub} />
          </a>
          <a href="">
            <FontAwesomeIcon className="header-icon" icon={faLinkedinIn} />
          </a>
          <a href="">
            <FontAwesomeIcon className="header-icon" icon={faTwitter} />
          </a>
          <a href="https://orcid.org/0000-0003-0240-6939">
            <FontAwesomeIcon className="header-icon" icon={faOrcid} />
          </a>
        </div>
      </div>
      <div className="email-wrapper">
        <p>
          <FontAwesomeIcon className="header-icon" icon={faEnvelopeOpen} />
        </p>
        <a href="">enzoscafura@gmail.com</a>
      </div>
    </footer>
  );
}
