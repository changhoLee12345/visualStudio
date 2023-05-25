// data.js
document.addEventListener('DOMContentLoaded', function () {
  let show = document.getElementById('show');

  fetch('data.txt')
    .then(resolve => resolve.text())
    .then(result => {
      console.log(result);
      let lineAry = result.split('\n');
      console.log(lineAry);
      let table = document.createElement('table');
      let tbody = document.createElement('tbody');
      table.append(tbody);

      lineAry.forEach(line => {
        tbody.append(makeTr(line));
      })
      show.append(table);
    })
    .catch(reject => console.error(reject))


})

function makeTr(line) {
  let tr = document.createElement('tr');

  let row = line.split(':')
  row.forEach(elem => {
    let td = document.createElement('td');
    td.innerText = elem;
    tr.append(td);
  })
  return tr;
}