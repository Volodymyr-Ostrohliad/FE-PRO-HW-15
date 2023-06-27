'use strict';

function createTable() {
  const div = document.createElement('div');
  div.classList.add('div');
  document.body.appendChild(div);

  const table = document.createElement('table');
  table.classList.add('table');
  div.appendChild(table);

  const nameTable = document.createElement('caption');
  nameTable.textContent = 'Таблиця множення';
  table.appendChild(nameTable);

  for (let i = 1; i <= 10; i++) {
    const row = document.createElement('tr');
    row.classList.add('row');

    for (let j = 1; j <= 10; j++) {
      const column = document.createElement('td');
      column.classList.add('column');
      column.textContent = i * j;
      row.appendChild(column);
    }
    table.appendChild(row);
  }

  return table;
}

const multiTable = createTable();
document.body.querySelector('.div').appendChild(multiTable);




