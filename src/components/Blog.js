import { BlogItem } from "./BlogItem";
import blogposts from "./blogposts";
export function Blog({ blogposts, selectedPostId, setSelectedPostId }) {
  // Function to handle post click
  function handlePostClick(id) {
    setSelectedPostId(id); // Set the clicked post's id
  }

  // If a post is selected, filter the post by its id
  const filteredPost = blogposts.find((post) => post.id === selectedPostId);

  return (
    <>
      {/* Show post list if no post is selected */}
      {!selectedPostId && (
        <>
          <div className="welcome-text">
            {" "}
            <h1>Code Chronicles 📒✏️</h1>
            <p>Join me on my adventure through code 🧑🏻‍🚀🏕️</p>
          </div>
          <div className="post-list">
            {blogposts.map((post, index) => (
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
          {blogposts.map((post, index) => (
            <BlogItem
              key={index}
              tags={post.tags}
              id={post.id}
              title={post.title}
              subtitle={post.subtitle}
              avatar={post.avatar}
              img={post.img}
              author={post.author}
              post={post.post}
              date={post.date}
            ></BlogItem>
          ))}
        </div>
      )}
    </>
  );
}
