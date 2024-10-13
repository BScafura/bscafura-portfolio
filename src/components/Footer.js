import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
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
          <a href="https://github.com/BScafura" target="_blank">
            <FontAwesomeIcon className="header-icon" icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/brenoscafura/" target="_blank">
            <FontAwesomeIcon className="header-icon" icon={faLinkedinIn} />
          </a>
          <a href="" target="_blank">
            <FontAwesomeIcon className="header-icon" icon={faXTwitter} />
          </a>
          <a href="https://orcid.org/0000-0003-0240-6939" target="_blank">
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
