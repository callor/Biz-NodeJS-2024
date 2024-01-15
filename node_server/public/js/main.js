document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello Korea");
  const nav_ul = document.querySelector("nav ul");
  nav_ul.addEventListener("click", (event) => {
    // li tag
    const target = event.target;
    if (target.tagName === "LI") {
      const className = target.className;
      if (className === "home") {
        document.location.href = "/";
      } else if (className === "join") {
        document.location.href = "/users";
      }
    }
  });
});
