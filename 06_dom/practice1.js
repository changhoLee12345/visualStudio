// dom/practice1.js

document.addEventListener('DOMContentLoaded', function () {
  let menus = ['아이스아메리카노', '까페라떼', '레몬에이드'];

  let ulTag = document.createElement('ul'); // element node.
  for (let i = 0; i < menus.length; i++) {
    // 1)아메리카노
    let liTag = document.createElement('li');
    liTag.innerHTML = menus[i];
    // 하위요소로 추가.
    ulTag.appendChild(liTag);
  }

  let divShow = document.getElementById('show');
  divShow.appendChild(ulTag); // 화면출력.

})