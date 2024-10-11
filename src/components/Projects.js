import { useState } from "react";
import { ProjectItems } from "./ProjectItems";
export function Projects({ data }) {
  // Filter projects by status
  const ongoingProjects = data.filter(
    (project) => project.status === "ongoing"
  );
  const finishedProjects = data.filter(
    (project) => project.status === "finished"
  );

  return (
    <div>
      <div className="project-title">
        <h1>Ongoing 🚧 and Finished 🎉 Projects </h1>
        <p>From Frontend to Backend, Crafting Dynamic Web Experiences 🪛</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="project-finished-ongoing">
          <h5>On the Move 👨🏻‍💻🏃🏻‍♂️</h5>
        </div>
        <div className="projects">
          {ongoingProjects.length > 0 ? (
            ongoingProjects.map((project) => (
              <div className="project-items" key={project.id}>
                <ProjectItems dataproject={project} />
              </div>
            ))
          ) : (
            <p>No ongoing projects at the moment.</p>
          )}
        </div>
        <div className="project-finished-ongoing">
          <h5>Wrapped Up 📦✅</h5>
        </div>
        <div className="projects">
          {finishedProjects.length > 0 ? (
            finishedProjects.map((project) => (
              <div className="project-items" key={project.id}>
                <ProjectItems dataproject={project} />
              </div>
            ))
          ) : (
            <p>No ongoing projects at the moment.</p>
          )}
        </div>
        <img
          className="qrcode-cv"
          src={process.env.PUBLIC_URL + "/qrcode.png"}
          alt="qrcode"
        />
      </div>
    </div>
  );
}
