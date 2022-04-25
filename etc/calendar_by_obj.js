const obj = {};

obj.makeHead = function () {
    this.days.forEach((day, ind) => {
        if (ind == 0) {
            document.write(`<thead>`)
        }
        document.write(`<th>${day}</th>`)
        if (ind == obj.days.length - 1) {
            document.write(`</thead>`)
        }
    })
}
obj.makeBody = function () {
    this.firstDay = this.getFirstDay();
    this.lastDate = this.getLastDate();
    console.log(this.firstDay, this.lastDate)

    document.write('<tbody><tr>')
    for (let i = 0; i < this.firstDay; i++) {
        document.write('<td></td>');
    }
    for (let i = 1; i <= this.lastDate; i++) {
        document.write(`<td>${i}</td>`);
        if ((this.firstDay + i) % 7 == 0) {
            document.write('</tr><tr>')
        }
    }
    document.write('</tr></tbody>')
}
obj.getFirstDay = function () {

    switch (this.month) {
        case 4:
            return 5;
        case 5:
            return 0;
    }

}
obj.getLastDate = function () {

    switch (this.month) {
        case 4:
            return 30;
        case 5:
            return 31;
    }
}

obj.makeCal = function (year, month) {
    this.days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];

    this.year = year;
    this.month = month;

    document.write(`<h3>${this.year}년 ${this.month}월`);
    document.write('<hr>')
    document.write('<table border=1>')
    this.makeHead();
    this.makeBody();
    document.write('</table>')

}

obj.makeCal(2022, 5);