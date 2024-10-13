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
          <li key={number} className={"page-item"}>
            <a
              style={{ color: "black" }}
              href="!#"
              className="page-link"
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
