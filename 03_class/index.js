import {
    Table as table
} from './Table.js'

let data = [{
    name: 'hong',
    age: 10
}, {
    name: 'Hwnag',
    age: 20
}]

let tbl = new table(data);

document.getElementById('show').innerHTML = tbl.createTable();

console.log(tbl);