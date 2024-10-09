import {
  faGithub,
  faLinkedinIn,
  faTwitter,
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
        </div>
      </div>
      <div className="email-wrapper">
        <p>
          <FontAwesomeIcon
            className="header-icon"
            icon={faEnvelopeOpen}
            style={{ fontSize: 20 }}
          />
        </p>
        <a href="">enzoscafura@gmail.com</a>
      </div>
    </footer>
  );
}
