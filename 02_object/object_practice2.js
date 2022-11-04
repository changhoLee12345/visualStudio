// object/practice2.js
// 달력만들기.
showCalendar(2022, 5);

function showCalendar(year = 2022, month = 4) {

  let firstDay = getFirstDay(year, month); // 1일의 위치지정하기 위한 함수.
  let lastDate = getLastDate(year, month); // 해당월의 마지막날을 계산 함수.

  document.write('<table border=1>')
  // 요일출력.
  showDayInfo();
  // 빈공간 작성.
  for (let i = 0; i < firstDay; i++) {
    document.write('<td> </td>');
  }
  // 날짜 화면 출력.
  for (let i = 1; i <= lastDate; i++) {
    if ((i + firstDay) % 7 == 0) { // 토요일은 파란색으로..
      document.write(`<td style="background-color: cyan;">${i}</td>`);
      document.write('</tr><tr>');
    } else if ((i + firstDay) % 7 == 1) { // 일요일은 빨간색으로..
      document.write(`<td style="background-color: red;">${i}</td>`);
    } else { // 그외 평일은 기본색으로..
      document.write(`<td>${i}</td>`);
    }
    // if ((i + firstDay) % 7 == 0) { // 줄바꿈.
    //   document.write('</tr><tr>');
    // }
  }
  document.write('</tr></table>');
}

function showDayInfo() {
  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
  document.write('<thead><tr>');
  days.forEach(function (day) {
    document.write(`<th style="background-color:aqua; color:green;">${day}</th>`)
  })
  document.write('</tr></thead>');
}

function getLastDate(year, month) {
  // 말일 정보를 가지고 오는 함수.
  switch (month) {
    case 4:
      return 30;
    case 5:
      return 31;
  }
}

function getFirstDay(year, month) {
  switch (month) {
    case 1:
      return 7;
    case 2:
      return 4;
    case 4:
      return 5;
    case 5:
      return 0;
  }
}