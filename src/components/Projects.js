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
        <h1>Crafting Dynamic Web Experiences 🪛</h1>
        <p>
          From Frontend to Backend, Delivering Seamless <br></br> and Scalable
          Solutions with Modern Technologies 💻🚚
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
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
        <img className="qrcode-cv" alt="qrcode" src="./qrcode.png"></img>
      </div>
    </div>
  );
}
