document.addEventListener("DOMContentLoade", () => {
  const btn_list = document.querySelector("button.list");
  const btn_update = document.querySelector("button.update");
  const btn_delete = document.querySelector("button.delete");
  btn_list.addEventListener("click", () => {
    document.location.href = "/books";
  });
  btn_update.addEventListener("click", (e) => {
    document.location.replace(
      `/books/${e.target.dataset.isbn}/update`
    );
  });
  btn_delete.addEventListener("click", (e) => {
    if (confirm("도서정보를 정말 삭제 할까요")) {
      document.location.replace(
        `/books/${e.target.dataset.isbn}/delete`
      );
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btn_box = document.querySelector("div.detail.btn");
  btn_box.addEventListener("click", (e) => {
    const button = e.target;
    if (button.tagName === "BUTTON") {
      const className = button.className;
      const isbn = button.dataset.isbn;
      let url = "/books";
      if (className === "update") {
        url += `/${isbn}/update`;
      } else if (className === "delete") {
        if (!confirm("도서 정보를 정말 삭제할까요?")) {
          return false;
        }
        url += `/${isbn}/delete`;
      }
      document.location.replace(url);
    }
  });
});
