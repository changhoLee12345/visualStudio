// dom/basic.js

// DOM : 생성, 속성, 삭제, 부모-자식 관계.
// addEventListenr('이벤트이름', '실행할 이벤트 핸들러')


document.addEventListener('DOMContentLoaded', function () {

  let h3Tag = document.getElementsByTagName('h3'); // HTMLCollection
  console.log(h3Tag);
  h3Tag[1].innerHTML = 'content changed.';

  let first = document.getElementById('first'); // element.
  console.log(first);
  first.innerHTML = 'Git Chaged';

  let second = document.getElementsByClassName('first');
  second[0].innerHTML = '사과';

  // CSS의 선택자  h3 > div 
  let list = document.querySelectorAll('ul>li');
  console.log(list);
  list[1].style.backgroundColor = 'yellow';

  // DOM 생성.
  let newList = document.createElement('li'); // <li>Mango</li>
  newList.innerHTML = 'Mango';

  console.log(newList);

  // ul 하위요소 <li>Mango</li>
  let ulTag = document.querySelector('ul');
  ulTag.appendChild(newList);

});