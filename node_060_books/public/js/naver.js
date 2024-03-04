document.addEventListener("DOMContentLoaded", () => {
  const book = document.querySelector("table.book");
  book.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "TD") {
      const tr = target.closest("TR");
      const isbn = tr.dataset.isbn;
      //   alert(isbn);
      document.location.href = `/naver/detail/${isbn}`;
    }
  });
});
