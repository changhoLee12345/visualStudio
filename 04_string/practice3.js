// 시간을 출력하는 함수를 생성하세요.
let today = new Date();

today.setFullYear(2023, 4, 7);

function dateFormat(date = new Date()) {
    return date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
}
console.log(dateFormat(today));