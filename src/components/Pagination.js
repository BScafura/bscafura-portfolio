export function Pagination({ postPerPage, filteredPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(filteredPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul
        className="pagination"
        style={{ justifyContent: "center", marginTop: 20 }}
      >
        {pageNumbers.map((number) => (
          <li key={number} className="page-item bn632-hover bn222">
            <a
              style={{
                color: "black",
                background: "transparent",
                border: "none",
              }}
              href="!#"
              className="page-link"
              onClick={(e) => {
                e.preventDefault(); // Prevents the default link behavior
                paginate(number); // Calls the pagination function
              }}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
