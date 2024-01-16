document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector("table.student.list");
  table.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "TD") {
      // alert(target.innerText);
      const parentsTR = target.closest("TR");
      const tds = parentsTR.querySelectorAll("TD");
      const st_num = tds[0].innerText;
      // href = "/student/" + st_num + "/detail"
      document.location.href = `/student/${st_num}/detail`;
    }
  });
});
