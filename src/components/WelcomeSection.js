import { CProgressBar, CProgress } from "@coreui/bootstrap-react";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
  faOrcid,
} from "@fortawesome/free-brands-svg-icons";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function WelcomeSection() {
  return (
    <div style={{ marginBottom: 50 }}>
      <div className="welcome-text">
        <h1>Hello there ✌️😅!</h1>
        <p>
          I'm Breno Enzo Scafura. I'm a software developer <br></br>with a
          passion for creating beautiful and <br></br> functional web
          applications 🚀.
        </p>
      </div>
      <div className="welcome-body">
        <div className="info-container">
          <div className="info-container-text-wrapper">
            <div className="avatar-container">
              <img
                className="avatar-img"
                src={process.env.PUBLIC_URL + "/avatar.jpg"}
                alt="avatar"
              />{" "}
              <div className="avatar-label">
                <p>Breno Enzo Scafura</p>
                <p style={{ textAlign: "center", fontStyle: "italic" }}>
                  Software Developer
                </p>
                <div className="main-techs">
                  <i class="devicon-javascript-plain colored"></i>{" "}
                  <i class="devicon-typescript-plain colored"></i>
                  <i class="devicon-css3-plain-wordmark colored"></i>
                  <i class="devicon-html5-plain-wordmark colored"></i>
                  <i class="devicon-nodejs-plain colored"></i>
                  <i class="devicon-react-original-wordmark colored"></i>
                  <i class="devicon-nextjs-plain"></i>
                </div>
              </div>
            </div>{" "}
            <p>
              I'm a passionate software developer with a strong focus on
              frontend and web development, working with technologies like
              JavaScript, TypeScript, Rust, React.js, Next.js, and Node.js. When
              I'm not coding, you'll find me playing the guitar, watching anime,
              or practicing martial arts – which keep me active and inspired.
              Lately, I've been diving deep into the world of Web3 and
              Blockchain, getting involved in exciting projects that explore the
              future of the decentralized web. I’m always eager to learn and
              contribute to innovative tech solutions!
            </p>
          </div>
          <div className="info-links">
            <div className="info-links-social-media-wrapper">
              <a href="">
                <FontAwesomeIcon className="header-icon" icon={faGithub} />
              </a>
              <a href="">
                <FontAwesomeIcon className="header-icon" icon={faLinkedinIn} />
              </a>
              <a href="">
                <FontAwesomeIcon className="header-icon" icon={faXTwitter} />
              </a>
              <a href="https://orcid.org/0000-0003-0240-6939">
                <FontAwesomeIcon className="header-icon" icon={faOrcid} />
              </a>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="info-container ">
          <div className="tools-container">
            <h3 style={{ textAlign: "center" }}>
              Skills <FontAwesomeIcon className="header-icon" icon={faRobot} />
            </h3>
            <div className="tech-wrapper">
              <div className="tech-container">
                <p>
                  <i class="devicon-rust-original"></i> Rust
                </p>
                <CProgress className="mb-2">
                  <CProgressBar
                    color="success"
                    variant="striped"
                    animated
                    value={45}
                  >
                    45%
                  </CProgressBar>
                </CProgress>
              </div>
              <div className="tech-container">
                <p>
                  <i class="devicon-javascript-plain colored"></i> JavaScript
                </p>
                <CProgress className="mb-2">
                  <CProgressBar
                    color="success"
                    variant="striped"
                    animated
                    value={65}
                  >
                    65%
                  </CProgressBar>
                </CProgress>
              </div>
              <div className="tech-container">
                <p>
                  <i class="devicon-typescript-plain colored"></i> TypeScript
                </p>
                <CProgress className="mb-3">
                  <CProgressBar
                    color="success"
                    variant="striped"
                    animated
                    value={65}
                  >
                    65%
                  </CProgressBar>
                </CProgress>
              </div>
              <div className="tech-container">
                <p>
                  <i class="devicon-dotnetcore-plain colored"></i>{" "}
                  <i class="devicon-csharp-plain colored"></i> C# / .Net
                </p>
                <CProgress className="mb-2">
                  <CProgressBar
                    color="success"
                    variant="striped"
                    animated
                    value={50}
                  >
                    50%
                  </CProgressBar>
                </CProgress>
              </div>
              <div className="tech-container">
                <p>
                  <i class="devicon-react-original colored"></i> React.Js
                </p>
                <CProgress className="mb-2">
                  <CProgressBar
                    color="success"
                    variant="striped"
                    animated
                    value={60}
                  >
                    60%
                  </CProgressBar>
                </CProgress>
              </div>
              <div className="tech-container">
                <p>
                  <i class="devicon-nodejs-plain-wordmark colored"></i> Node.Js
                </p>
                <CProgress className="mb-2">
                  <CProgressBar
                    color="success"
                    variant="striped"
                    animated
                    value={60}
                  >
                    60%
                  </CProgressBar>
                </CProgress>
              </div>
              <div className="tech-container">
                <p>
                  <i class="devicon-nextjs-original-wordmark"></i> Next.Js
                </p>
                <CProgress className="mb-2">
                  <CProgressBar
                    color="success"
                    variant="striped"
                    animated
                    value={55}
                  >
                    55%
                  </CProgressBar>
                </CProgress>
              </div>
              <div className="tech-container">
                <p>
                  <i class="devicon-mysql-plain-wordmark colored"></i> MySQL
                </p>
                <CProgress className="mb-2">
                  <CProgressBar
                    color="success"
                    variant="striped"
                    animated
                    value={60}
                  >
                    60%
                  </CProgressBar>
                </CProgress>
              </div>
              <div className="tech-container">
                <p>
                  <i class="devicon-azuresqldatabase-plain colored"></i>
                  SQL
                </p>
                <CProgress className="mb-2">
                  <CProgressBar
                    color="success"
                    variant="striped"
                    animated
                    value={60}
                  >
                    60%
                  </CProgressBar>
                </CProgress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
