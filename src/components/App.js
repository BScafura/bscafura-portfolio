import Header from "./Header";
import { Footer } from "./Footer";
import { WelcomeSection } from "./WelcomeSection";
import { Projects } from "./Projects";
import { Blog } from "./Blog";
import dataprojects from "./dataprojects";
import blogposts from "./blogposts";
import { useState, useEffect, useRef } from "react";
import GoTopButton from "./GoTopButton";
import { AboutMe } from "./AboutMe";
import { Pagination } from "./Pagination";

function App() {
  const [showProjects, setShowProjects] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const [selectedPostId, setSelectedPostId] = useState(null); // State to store the selected post ID
  const [showGoTop, setShowGoTop] = useState(false);

  // Create a ref for the header
  const headerRef = useRef(null);

  const handleVisibleButton = () => {
    const threshold = 500; // Adjust threshold value as needed
    if (window.scrollY > threshold) {
      setShowGoTop(true); // Show the "Go to Top" button
    } else {
      setShowGoTop(false); // Hide the "Go to Top" button
    }
  };

  const scrollToHeader = () => {
    // Use smooth scrolling to the header
    headerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber); // Function to handle change page event

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = filteredPosts.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    setFilteredPosts(blogposts); // Set initial filtered posts
  }, []);

  function toggleAbout() {
    setShowAbout(true);
    setShowProjects(false);
    setShowBlog(false);
    setShowHome(false);
    setSelectedPostId(null);
  }

  function toggleProjects() {
    setShowProjects(true);
    setShowBlog(false);
    setShowHome(false);
    setSelectedPostId(null);
    setShowAbout(false);
  }

  function toggleShowBlog() {
    setShowBlog(true);
    setShowProjects(false);
    setShowHome(false);
    setSelectedPostId(null);
    setShowAbout(false);
  }

  function toggleShowHome() {
    setShowHome(true);
    setShowProjects(false);
    setShowBlog(false);
    setSelectedPostId(null);
    setShowAbout(null);
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
        toggleShowAbout={toggleAbout}
        ref={headerRef} // Correctly assigning ref to Header
      />
      {showHome && <WelcomeSection />}{" "}
      {/* Show WelcomeSection if home is true */}
      {showProjects && <Projects data={dataprojects} />}{" "}
      {/* Conditionally render Projects */}
      {showBlog && (
        <>
          <Blog
            blogposts={currentPost}
            selectedPostId={selectedPostId}
            setSelectedPostId={setSelectedPostId}
            toggleShowBlog={toggleShowBlog}
            postPerPage={postPerPage}
            paginate={paginate}
            filteredPosts={filteredPosts}
          />
          {selectedPostId === null ? (
            <Pagination
              paginate={paginate}
              filteredPosts={filteredPosts.length}
              postPerPage={postPerPage}
            ></Pagination>
          ) : (
            <></>
          )}
        </>
      )}
      {/* Conditionally render About*/}
      {showAbout && <AboutMe></AboutMe>}
      <GoTopButton
        scrollToHeader={scrollToHeader} // Pass the scroll function to GoTopButton
        showGoTop={showGoTop} // Only pass showGoTop
      />
      <Footer />
    </div>
  );
}

export default App;
