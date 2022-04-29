let data = [{
    studNo: 101,
    studName: '조수연',
    engScore: 90,
    korScore: 80
  },
  {
    studNo: 102,
    studName: '황진주',
    engScore: 88,
    korScore: 91
  },
  {
    studNo: 103,
    studName: '권가희',
    engScore: 92,
    korScore: 89
  },
  {
    studNo: 104,
    studName: '유해정',
    engScore: 92,
    korScore: 83
  }
];

// 초기화.
let list = document.getElementById('list');
data.forEach(function (elem, idx, ary) {
  list.appendChild(makeTr(elem));
});

// 변경버튼 이벤트.
let changeBtn = document.querySelector('input[type="button"]');
changeBtn.addEventListener('click', function (e) {
  // 대상찾아오도록.
  // let targetTr = document.querySelectorAll('#list>tr');
  // console.log(targetTr);
  // let sno = document.getElementById('sno').value;
  // let escore = document.getElementById('escore').value;
  // targetTr.forEach(function (tr) {
  //   console.log(tr);
  //   if (tr.children[0].innerHTML == sno) {
  //     tr.children[2].innerHTML = escore; // 영어점수변경.
  //   }
  // });

  let obj = {
    studNo: 111,
    studName: 'hong',
    engScore: 99,
    korScore: 99
  }
  let newTr = makeTr(obj);

  let origTr = document.getElementById('sno_101');

  document.getElementById('list').replaceChild(newTr, origTr);

});

function changeCallBack1(e) {

  e.preventDefault(); // 기본기능 차단.
  console.log('hhhhh');
  let sno = document.getElementById('sno').value;
  let sname = document.getElementById('sname').value;
  let escore = document.getElementById('escore').value;
  let kscore = document.getElementById('kscore').value;

  if (!(sno && sname && escore && kscore)) {
    alert('필수값을 입력하세요>>');
    return;
  }
  // if (!sno) {
  //   alert('변경할 아이디를 입력>>>');
  //   return;
  // } else if (!sname) {
  //   alert('변경할 이름을 입력>>>');
  //   return;
  // } else if (!escore) {
  //   alert('변경할 영어점수을 입력>>>');
  //   return;
  // } else if (!kscore) {
  //   alert('변경할 국어점수을 입력>>>');
  //   return;
  // }

  let searchTr = document.getElementById(`sno_${sno}`);
  searchTr.children[1].innerHTML = sname;
  searchTr.children[2].innerHTML = escore;
  searchTr.children[3].innerHTML = kscore;
}

// student 한건 -> <tr><td>학번</td><td>학이름</td><td>영어</td><td>국어</td></tr>
function makeTr(student) {
  let tr = document.createElement('tr');
  tr.setAttribute('id', 'sno_' + student.studNo);
  tr.addEventListener('click', function (e) {
    // e.stopPropagation();
    console.log(this.children[1].innerHTML);
    document.getElementById('sno').value = this.children[0].innerHTML;
    document.getElementById('sname').value = this.children[1].innerHTML;
    document.getElementById('escore').value = this.children[2].innerHTML;
    document.getElementById('kscore').value = this.children[3].innerHTML;
  }, false); // true: 상위 -> 하위. false: 하위 -> 상위 
  for (let field in student) { // stuent['studNo']
    let td = document.createElement('td');
    td.innerHTML = student[field];
    tr.appendChild(td);
  }
  // 버튼 : 삭제.
  let btn = document.createElement('button');
  btn.innerHTML = '삭제';
  btn.addEventListener('click', function (e) {
    e.stopPropagation(); // 이벤트 전파 차단.
    console.log(this);
    // e.target.parentElement.parentElement.remove();
  }, false);
  let td = document.createElement('td');
  td.appendChild(btn);
  tr.appendChild(td);

  return tr;
}