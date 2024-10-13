import { BlogItem } from "./BlogItem";
import { useEffect } from "react";
export function Blog({
  blogposts,
  selectedPostId,
  setSelectedPostId,
  toggleShowBlog,
}) {
  // Function to handle post click
  function handlePostClick(id) {
    setSelectedPostId(id); // Set the clicked post's id
  }

  // If a post is selected, filter the post by its id
  const filteredPost = blogposts.find((post) => post.id === selectedPostId);

  // Scroll to top when a blog post is selected
  useEffect(() => {
    if (selectedPostId) {
      window.scrollTo({
        top: 0, // Scroll to the top of the page
        behavior: "instant", // instant scrolling effect
      });
    }
  }, [selectedPostId]); // Only run when selectedPostId changes

  return (
    <>
      {/* Show post list if no post is selected */}
      {!selectedPostId && (
        <>
          <div className="welcome-text">
            <h1>Code Chronicles 📒✏️</h1>
            <p>Join me on my adventure through code 🧑🏻‍🚀🏕️</p>
          </div>
          <div className="post-list">
            {blogposts.map((post) => (
              <div
                className="post-preview"
                key={post.id}
                onClick={() => handlePostClick(post.id)}
              >
                <div className="preview-image">{post.previewimg}</div>
                <h4 className="preview-title">{post.title} 📱</h4>
                <div className="post-divider"></div>
                <p className="preview-subtitle">{post.subtitle}</p>
                <div className="preview-post-tags">
                  {post.tags.map((tag, index) => (
                    <p key={index}>{tag}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Show selected post details if a post is selected */}
      {selectedPostId && filteredPost && (
        <div className="post-body">
          <BlogItem
            toggleShowBlog={toggleShowBlog}
            key={filteredPost.id}
            tags={filteredPost.tags}
            id={filteredPost.id}
            title={filteredPost.title}
            subtitle={filteredPost.subtitle}
            avatar={filteredPost.avatar}
            img={filteredPost.img}
            author={filteredPost.author}
            post={filteredPost.post}
            date={filteredPost.date}
          />
        </div>
      )}
    </>
  );
}
