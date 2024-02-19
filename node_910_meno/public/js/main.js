document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello Korea");
  console.log("This is Top level event handler, DOM is ready");
});

window.addEventListener("pageshow", (event) => {
  if (
    event.persisted ||
    performance.getEntriesByType("navigation")[0].type ===
      "back_forward"
  ) {
    location.reload();
  }
});
