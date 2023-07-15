export default {
  name: 'hong',
  age: 20,
  showInfo() {
    return `name => ${this.name}, age => ${this.age}`
  },
  setData(dataAry = []) {
    this.dataAry = dataAry;
  },
  Table(dataAry) {
    if (dataAry) {
      this.setData(dataAry);
      this.table = document.createElement('table');
      this.table.append(this.makeThead())
      this.table.append(this.makeTbody())
    }
    return this.table;
  },
  makeTable() {
    this.table = document.createElement('table');
    this.table.append(this.makeThead())
    this.table.append(this.makeTbody())
    return this.table;
  },
  makeThead() {
    this.thead = document.createElement('thead');
    let tr = document.createElement('tr');
    for (let prop in this.dataAry[0]) {
      let th = document.createElement('th')
      th.innerText = prop;
      tr.append(th);
    }
    this.thead.append(tr);
    return this.thead;
  },
  makeTbody() {
    this.tbody = document.createElement('tbody');
    this.dataAry.forEach(row => this.tbody.append(this.makeTr(row)));
    return this.tbody;
  },
  makeTr(row = {}) {
    let tr = document.createElement('tr');
    for (let prop in row) {
      let td = document.createElement('td');
      td.innerText = row[prop];
      tr.append(td);
    }
    return tr;
  }
}