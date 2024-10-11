import Header from "./Header";
import { Footer } from "./Footer";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { WelcomeSection } from "./WelcomeSection";
import { Projects } from "./Projects";
import { Blog } from "./Blog";
import dataprojects from "./dataprojects";
import blogposts from "./blogposts";
import { useState, useEffect } from "react";

function App() {
  const [showProjects, setShowProjects] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  // State to store the selected post ID

  function toggleProjects() {
    setShowProjects(true);
    setShowBlog(false);
    setShowHome(false);
    setSelectedPostId(null);
  }

  function toggleShowBlog() {
    setShowBlog(true);
    setShowProjects(false);
    setShowHome(false);
    setSelectedPostId(null);
  }

  function toggleShowHome() {
    setShowHome(true);
    setShowProjects(false);
    setShowBlog(false);
    setSelectedPostId(null);
  }

  useEffect(() => {
    setShowHome(true);
  }, []);

  return (
    <div className="App">
      <Header
        toggleProjects={toggleProjects}
        toggleShowBlog={toggleShowBlog}
        toggleShowHome={toggleShowHome}
      ></Header>
      {showHome && <WelcomeSection />}{" "}
      {/* Show WelcomeSection if home is true */}
      {showProjects && <Projects data={dataprojects}></Projects>}{" "}
      {/* Conditionally render Projects */}
      {showBlog && (
        <Blog
          blogposts={blogposts}
          selectedPostId={selectedPostId}
          setSelectedPostId={setSelectedPostId}
        ></Blog>
      )}{" "}
      {/* Conditionally render Blog */}
      <Footer></Footer>
    </div>
  );
}

function AboutMe() {}

function Technologies() {}

export default App;
