document.addEventListener("DOMContentLoaded", () => {
  const ST_INDEX = {
    ST_NUM: 0,
    ST_NAME: 1,
    ST_DEPT: 2,
  };

  const st_num_check = async (st_num) => {
    const result = await fetch(`/student/${st_num}/check`);
    const json = await result.json();
    console.log(json);
    return json.result;
  };

  // const st_num = document.querySelector("input[name='st_num']")
  //   const st_num = document.querySelector("#st_num");
  //   const st_name = document.querySelector("#st_name");
  //   const st_dept = document.querySelector("#st_dept");
  //   const btn_submit = document.querySelector("form.student button");

  const form = document.querySelector("form.student");
  //   const st_num = form.querySelector("#st_num")
  //   const st_name = form.querySelector("#st_name")
  //   const st_dept = form.querySelector("#st_dept")

  const btn_submit = form.querySelector("button");
  const inputs = form.querySelectorAll("input");
  const st_num = inputs[ST_INDEX.ST_NUM];
  const st_name = inputs[ST_INDEX.ST_NAME];
  const st_dept = inputs[ST_INDEX.ST_DEPT];

  // 여러개의 tag 묶음을 배열로 만들기
  const error_divs = document.querySelectorAll("div.student.error");
  /**
   * 먼저 btn_submit(button) 의 click event 를 최소한으로 테스트를 하고
   * 이후에 btn_submit null pointer exception 을 일으키는 현상을 방지하기 위하여
   * btn_submit? 형식으로 이후 코드를 사용한다
   */
  btn_submit?.addEventListener("click", () => {
    // 표시되었던 error 메시지를 모두 clear
    error_divs.forEach((item) => (item.innerHTML = ""));

    // alert("전송");
    if (!st_num.value) {
      error_divs[ST_INDEX.ST_NUM].innerHTML =
        "* 학번은 반드시 입력하세요";
      st_num.select();
      return false;
    } else {
      st_num_check(st_num.value).then((result) => {
        if (result !== "ERROR") {
          if (result === "있다") {
            error_divs[ST_INDEX.ST_NUM].innerHTML =
              " * 이미 등록된 학번임";
            st_num.select();
            return false;
          } else {
            error_divs[ST_INDEX.ST_NUM].innerHTML =
              " 사용가능한 학번";
            error_divs[ST_INDEX.ST_NUM].style.color = "blue";
          }
        }
      });
    }
    if (!st_name.value) {
      error_divs[ST_INDEX.ST_NAME].innerHTML =
        "* 학생의 이름은 반드시 입력해야 합니다";
      st_name.select();
      return false;
    }
    if (!st_dept.value) {
      error_divs[ST_INDEX.ST_DEPT].innerHTML =
        "* 학과는 반드시 입력하세요";
      st_dept.select();
      return false;
    }

    // 유효성 검사를 마치면 서버로 데이터 보내기
    form.submit();
  });

  // 학번을 입력받은 input box 에 event 걸기
  /**
   * blur event
   * 보통은 input box 에서 사용하는 event
   * input box 에 focus() 가 있다가 다른 곳으로 focus() 이동하는 순간
   * 발생하는 event
   */
  st_num?.addEventListener("blur", (event) => {
    const target = event.target;
    const value = target.value;
    if (!value) {
      error_divs[ST_INDEX.ST_NUM].innerText =
        "* 학번을 입력해 주세요";
      // alert("학번은 반드시 입력하세요");
      target.select();
      return false;
    } else {
      error_divs[ST_INDEX.ST_NUM].innerText = "";
    }
  });

  st_name.addEventListener("blur", (event) => {
    const target = event.target;
    const value = target.value;
  });

  st_num.focus();
});
