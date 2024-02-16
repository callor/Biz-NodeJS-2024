document.addEventListener("DOMContentLoaded", () => {
  const date_form = document.querySelector("form.date");
  const input_form = document.querySelector("form.input");
  const btn_save = document.querySelector("input.btn_save");
  const btn_new = document.querySelector("input.btn_new");

  btn_new = document.addEventListener("click", async () => {
    try {
      const result = await fetch("/get_new_date");
      const json = await result.json();
      date_form.querySelector("input.todate").value = json.toDate;
      date_form.querySelector("input.totime").value = json.toTime;
    } catch (error) {
      alert("서버 통신오류");
    }
  });

  btn_save.addEventListener("click", () => {
    const toDate = date_form.querySelector("input.todate").value;
    const toTime = date_form.querySelector("input.totime").value;
    const toSubject =
      input_form.querySelector("input.tosubject").value;
    const toMemo = input_form.querySelector("input.tomemo").value;

    console.log(toDate, toTime, toSubject, toMemo);
  });
});
