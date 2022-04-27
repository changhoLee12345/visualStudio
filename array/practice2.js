// array/practice2.js
let data =
  `[{"id":1,"first_name":"Brenn","last_name":"Saville","email":"bsaville0@parallels.com","gender":"Female","ip_address":"29.17.236.90"},
{"id":2,"first_name":"Tallou","last_name":"Guite","email":"tguite1@reference.com","gender":"Female","ip_address":"171.17.224.205"},
{"id":3,"first_name":"Jermaine","last_name":"Davioud","email":"jdavioud2@odnoklassniki.ru","gender":"Genderfluid","ip_address":"53.64.42.171"},
{"id":4,"first_name":"Tull","last_name":"Diprose","email":"tdiprose3@comcast.net","gender":"Male","ip_address":"61.71.99.172"},
{"id":5,"first_name":"Dyan","last_name":"Matchitt","email":"dmatchitt4@xrea.com","gender":"Female","ip_address":"18.158.52.5"},
{"id":6,"first_name":"Mariejeanne","last_name":"Gumme","email":"mgumme5@europa.eu","gender":"Female","ip_address":"178.84.177.209"},
{"id":7,"first_name":"Marve","last_name":"Perel","email":"mperel6@illinois.edu","gender":"Male","ip_address":"102.50.99.154"},
{"id":8,"first_name":"Olin","last_name":"Cheeke","email":"ocheeke7@nature.com","gender":"Male","ip_address":"247.42.220.99"},
{"id":9,"first_name":"Beatriz","last_name":"Schottli","email":"bschottli8@diigo.com","gender":"Female","ip_address":"238.196.176.49"},
{"id":10,"first_name":"Karla","last_name":"Roy","email":"kroy9@goo.ne.jp","gender":"Female","ip_address":"75.151.173.126"},
{"id":11,"first_name":"Lynnelle","last_name":"Stepto","email":"lsteptoa@vimeo.com","gender":"Female","ip_address":"222.21.220.30"},
{"id":12,"first_name":"Lay","last_name":"Georgeou","email":"lgeorgeoub@google.pl","gender":"Male","ip_address":"187.201.223.232"},
{"id":13,"first_name":"Shay","last_name":"Gass","email":"sgassc@twitpic.com","gender":"Male","ip_address":"115.240.94.66"},
{"id":14,"first_name":"Giorgio","last_name":"Dundredge","email":"gdundredged@nhs.uk","gender":"Male","ip_address":"107.237.86.210"},
{"id":15,"first_name":"Dotti","last_name":"Gonning","email":"dgonninge@miitbeian.gov.cn","gender":"Female","ip_address":"71.172.16.226"}]`;

let objAry = JSON.parse(data); // 문자열 => Object 변환.

console.log(objAry);

// tag를 누적시킴.
let result = objAry.reduce(function (accum, elem, ind) {
  console.log(accum);
  // <ul> ~ </ul>
  if (ind == 0) {
    accum += '<ul>';
  }
  accum += `<li>id: ${elem['id']}, first_name: ${elem['first_name']} </li>`;
  if (ind == objAry.length - 1) {
    accum += '</ul>';
  }
  return accum; // 다음순번의 초기값(계속 누적해서 tag생성.)
}, '');
document.write(result);