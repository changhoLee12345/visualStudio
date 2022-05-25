// date.js

// 날짜 생성.
console.log(Date());
let today = Date();
today = Date.now();
console.log(today);

let prevDay = new Date('2020-11-15');
console.log(prevDay);

console.log(prevDay.toDateString()); //Sun Nov 15 2020
console.log(prevDay.toISOString()); //2020-11-15T00:00:00.000Z
console.log(prevDay.toLocaleString()); // 11/15/2020, 9:00:00 AM
console.log(prevDay.toLocaleDateString()); // 11/15/2020
console.log(prevDay.toLocaleTimeString()); // 9:00:00 AM


Date.prototype.dateFormat = function (format) {
    if (format == 'yyyy-MM-dd') {
        let yy = this.getFullYear();
        let mm = ('0' + (this.getMonth() + 1)).slice(-2);
        let dd = this.getDate();
        console.log(`${yy}-${mm}-${dd}`);
        return `${yy}-${mm}-${dd}`;
    }
}
console.log(prevDay.dateFormat('yyyy-MM-dd'));