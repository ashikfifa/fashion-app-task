import React from "react";

const Pagination = (props) => {
  const { totalPages, setCurrentPage, currentPage } = props;
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        style={{
          margin: "0 5px",
          padding: "5px 10px",
          backgroundColor: i === currentPage ? "#c7a4a4" : "#f8f9fa",
          color: i === currentPage ? "#fff" : "#000",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
      >
        {i}
      </button>
    );
  }
  return <div>{pages}</div>;
};

export default Pagination;
