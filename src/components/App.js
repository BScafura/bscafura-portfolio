import Header from "./Header";
import { Footer } from "./Footer";
import { WelcomeSection } from "./WelcomeSection";
import { Projects } from "./Projects";
import { Blog } from "./Blog";
import dataprojects from "./dataprojects";
import blogposts from "./blogposts";
import { useState, useEffect, useRef } from "react";
import GoTopButton from "./GoTopButton";

function App() {
  const [showProjects, setShowProjects] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null); // State to store the selected post ID
  const [showGoTop, setShowGoTop] = useState(false);

  // Create a ref for the header
  const headerRef = useRef(null);

  const handleVisibleButton = () => {
    // Check if headerRef.current is defined
    if (headerRef.current) {
      const { top } = headerRef.current.getBoundingClientRect(); // Get the position of the header
      setShowGoTop(top < -100); // Show button if the header is scrolled above 100 pixels
    }
  };

  const scrollToHeader = () => {
    // Use smooth scrolling to the header
    headerRef.current.scrollIntoView({ behavior: "smooth" });
  };

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
    window.addEventListener("scroll", handleVisibleButton);
    return () => {
      window.removeEventListener("scroll", handleVisibleButton); // Clean up the event listener
    };
  }, []);

  useEffect(() => {
    setShowHome(true);
  }, []);

  return (
    <div className="App">
      <Header
        toggleProjects={toggleProjects}
        toggleShowBlog={toggleShowBlog}
        toggleShowHome={toggleShowHome}
        ref={headerRef} // Correctly assigning ref to Header
      />
      {showHome && <WelcomeSection />}{" "}
      {/* Show WelcomeSection if home is true */}
      {showProjects && <Projects data={dataprojects} />}{" "}
      {/* Conditionally render Projects */}
      {showBlog && (
        <Blog
          blogposts={blogposts}
          selectedPostId={selectedPostId}
          setSelectedPostId={setSelectedPostId}
          toggleShowBlog={toggleShowBlog}
        />
      )}
      <GoTopButton
        scrollToHeader={scrollToHeader} // Pass the scroll function to GoTopButton
        showGoTop={showGoTop} // Only pass showGoTop
      />
      <Footer />
    </div>
  );
}

function AboutMe() {}

export default App;
