import { useState } from "react";
export function ProjectItems({ dataproject }) {
  const [showDescription, setShowDescription] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  function handleToggleDescription() {
    setShowDescription((showDescription) => !showDescription);
    setShowFeatures(false);
  }

  function handleToggleFeatures() {
    setShowFeatures((showFeatures) => !showFeatures);
    setShowDescription(false);
  }

  return (
    <div className="projects-container">
      <div className="project-card">
        <div className="card-top">
          <div className="project-info">
            {" "}
            <p style={{ color: "#e5e7eb" }}>
              {dataproject.image} {dataproject.name}
            </p>
            <p>
              <div className="project-techs">
                {dataproject.techs.map((tech, index) => (
                  <p
                    className={tech.toLowerCase()}
                    style={{ marginBottom: 0 }}
                    key={index}
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </p>
          </div>
          <div className="project-status">
            <div
              className={
                dataproject.status === "finished" ? "finished" : "ongoing"
              }
            >
              <p>{dataproject.status}</p>
            </div>
          </div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom-buttons">
            <button onClick={handleToggleDescription} class="bn31" href="/">
              <span class="bn31span">Description</span>
            </button>
            <button onClick={handleToggleFeatures} class="bn31" href="/">
              <span class="bn31span">Features</span>
            </button>
            <a class="bn31" target="_blank" href={dataproject.link}>
              <span class="bn31span">Visit</span>
            </a>
          </div>
          {showFeatures === true ? (
            <p>
              {dataproject.features.map((feature, index) => (
                <div
                  className={`project-features ${showFeatures ? "open" : ""}`}
                >
                  <li
                    style={{ fontSize: 11, margin: 5, fontStyle: "italic" }}
                    key={index}
                  >
                    {feature}
                  </li>
                </div>
              ))}
            </p>
          ) : (
            ""
          )}
          {showDescription === true ? (
            <p style={{ fontSize: 12, fontStyle: "italic", color: "#e5e7eb" }}>
              {dataproject.description}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
