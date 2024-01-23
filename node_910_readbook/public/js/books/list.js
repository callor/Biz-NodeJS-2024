document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("table.books tbody");
  tbody.addEventListener("click", (e) => {
    // target 은 td tag
    const target = e.target;
    if (target.tagName === "TD") {
      // click 된 TD 의 부모 TR 을 selector 하라
      const parTr = target.closest("TR");
      const isbn = parTr.dataset.isbn;
      // alert(isbn);
      // document.location.href = `/books/${isbn}/detail`
      document.location.replace(`/books/${isbn}/detail`);
    }
  });
});
