export class Table {

    constructor(data) {
        this.tag = '';
        this.aryData = data;
        // this.createTable();
    }

    createHeader(obj) {
        this.tag += '<thead><tr>';
        for (let field in obj) {
            this.tag += `<td>${field.toUpperCase()}</td>`;
        }
        this.tag += '</tr></thead>';
        // return hdr;
    }

    createBody(data) {
        this.tag += '<tbody>';
        for (let row of data) {
            this.tag += `<tr>`;
            for (let field in row) {
                this.tag += `<td>${row[field]}</td>`;
            }
            this.tag += `</tr>`;
        }
        // return bdy;
    }

    createTable() {
        this.tag += '<table border=1>';
        // this.tag += this.createHeader(this.aryData[0]);
        // this.tag += this.createBody(this.aryData);
        this.createHeader(this.aryData[0]);
        this.createBody(this.aryData);
        this.tag += '</table>';
        return this.tag;
    }

}

let data = [{
    sname: 'hong',
    age: 10
}, {
    sname: 'Hwnag',
    age: 20
}]

// let table = new Table(data);
// Table.prototype.getTagInfo = function () {
//     console.log(this)
//     return this.tag;
// }

// document.write(table.createTable());
// console.log(table.getTagInfo());