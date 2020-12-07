import goblin from '../img/goblin.png';

document.addEventListener('DOMContentLoaded', () => {
  const cells = document.querySelectorAll('td');
  const cellsArr = [...cells];
  const icon = `<img src='${goblin}' alt='goblin icon'>`;
  const getrndCell = () => Math.floor(Math.random() * cellsArr.length);
  let startCell = getrndCell();
  cellsArr[startCell].innerHTML = icon;

  setInterval(() => {
    let currentCell = getrndCell();
    if (startCell === currentCell) currentCell = getrndCell();
    cellsArr[startCell].innerHTML = '';
    cellsArr[currentCell].innerHTML = icon;
    startCell = currentCell;
  }, 1000);
});
