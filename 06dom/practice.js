// dom/practice.js

document.addEventListener('DOMContentLoaded', function () {
  let btn = document.querySelector('button');
  btn.addEventListener('click', function () {
    // 입력값1, 입력값2
    let name = document.getElementById('userName').value;
    let age = document.getElementById('userAge').value;

    if (!name) {
      alert('이름을 입력하세요..');
      return;
    }
    if (!age) {
      alert('나이을 입력하세요..');
      return;
    }

    let span1 = document.createElement('span'); // <span>${name}</span>
    span1.innerHTML = name;
    let span2 = document.createElement('span'); // <span>${age}</span>
    span2.innerHTML = age;
    let div1 = document.createElement('div');
    div1.appendChild(span1); // <div><span></span></div>
    div1.appendChild(span2); // <div><span>홍길동</span><span>20</span></div>

    document.getElementById('show').appendChild(div1); // 화면출력.
  });
})