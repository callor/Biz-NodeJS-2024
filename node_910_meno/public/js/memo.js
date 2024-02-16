document.addEventListener("DOMContentLoaded", () => {
  const date_form = document.querySelector("form.date");
  const input_form = document.querySelector("form.input");
  const btn_save = document.querySelector("input.btn_save");
  const btn_new = document.querySelector("input.btn_new");

  btn_new.addEventListener("click", async () => {
    try {
      const response = await fetch("/get_new_date");
      const json = await response.json();
      date_form.querySelector("input.todate").value = json.toDate;
      date_form.querySelector("input.totime").value = json.toTime;
    } catch (error) {
      alert("서버 통신오류");
    }
  });

  btn_save.addEventListener("click", () => {
    const toDate = date_form.querySelector("input.todate"); // .value;
    const toTime = date_form.querySelector("input.totime"); // .value;
    // const toSubject =
    //   input_form.querySelector("input.tosubject").value;
    // const toMemo = input_form.querySelector("input.tomemo").value;

    /**
     * 저장 버튼을 클릭했을때
     * 저정버튼은 input_form 에 포함되어 있는 버튼
     * 저장버튼을 클릭하면 input_form 에 있는 값은 서버로 전송이 가능하지만
     * date_form 에 있는 값은 함께 보내지 못한다
     * 그래서 date_form 에 있는 2개의 입력박스(toDate, toTime)을
     * input_form 에 추가하고 같이 보내줘야 한다
     */
    input_form.appendChild(toDate);
    input_form.appendChild(toTime);
    input_form.submit();

    // console.log(toDate, toTime, toSubject, toMemo);
  });
});
