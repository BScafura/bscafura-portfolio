import Header from "./Header";
import { Footer } from "./Footer";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { WelcomeSection } from "./WelcomeSection";
import { Projects } from "./Projects";
import dataprojects from "./dataprojects";
import { useState } from "react";

function App() {
  const [showProjects, setShowProjects] = useState(false);

  function toggleProjects() {
    setShowProjects(!showProjects);
  }

  return (
    <div className="App">
      <Header toggleProjects={toggleProjects}></Header>
      {showProjects === false ? (
        <WelcomeSection></WelcomeSection>
      ) : (
        <Projects data={dataprojects}></Projects>
      )}
      <Footer></Footer>
    </div>
  );
}

function AboutMe() {}

function Technologies() {}

export default App;
