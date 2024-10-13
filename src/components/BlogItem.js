export function BlogItem({
  toggleShowBlog,
  id,
  title,
  avatar,
  subtitle,
  img,
  author,
  post,
  tags,
  date,
}) {
  return (
    <div className="post-item">
      <div className="post-wrapper">
        <div className="post-header">
          <h1 className="blog-title">
            {id}# {title} 📱
          </h1>
          <p className="blog-subtitle">{subtitle}</p>
          <div className="blog-tags">
            {tags.map((tag, index) => (
              <p>{tag}</p>
            ))}
          </div>
        </div>
        <div className="post-img-wrapper">{img}</div>
        <div className="post-text-wrapper">{post}</div>
        <div className="blog-autor-date-avatar">
          {avatar}
          <div>
            <p>{`${author}     •      ${date}`}</p>
          </div>
        </div>
      </div>
      <div className="return-wrapper">
        <button
          onClick={toggleShowBlog}
          style={{ alignSelf: "flex-end" }}
          className="bn632-hover bn22"
        >
          Return
        </button>
      </div>
    </div>
  );
}
