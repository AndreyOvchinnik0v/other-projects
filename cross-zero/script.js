const app = document.getElementById('app'); // получение точки монтирования

const field = document.createElement('div'); // создание игрового поля
field.classList.add('field'); 
app.appendChild(field); // встраивание игрового поля в точку монтирования
let counter = -1; // счётчик клеток
let step = Math.round(Math.random() * 1) // счётчик ходов


let popup = document.querySelector('.popup'); // получения модального окна
let content = document.querySelector('.content'); 

let NewGameBtn = document.querySelector('button'); //получение кнопки вызывающей функию NewGameBtn
cells = document.getElementsByClassName('cell'); // получение коллекции игровых клеток

NewGameBtn.addEventListener('click', function(){ // функция стирающая классы у клеток и скрывающая модальное окно
  for(i of cells){
    i.classList.remove('cross', 'zero')
  }

  unmount()
  popup.classList.remove('popup_show')
})


for (let i = 0; i < 9; i++) { //цикл создающий клетки в полях
  counter++;
  cellCreate = document.createElement('div'); // создание клеток
  cellCreate.classList.add('cell');
  cellCreate.setAttribute('id', `cell-${counter}`)
  field.appendChild(cellCreate);
}

for (let i of cells) { // циклы добавлюящий слушателей на клетки

  i.addEventListener('click', function () {
    if (step % 2 == 0 && i.innerText == '') {
      i.innerText = 'X'
      i.classList.add('cross')
      checkWin()
    } else if (step % 2 == 1 && i.innerText == '') {
      i.innerText = 'O'
      i.classList.add('zero')
      checkWin()
    } else(step--)
    step++
  })
}

function unmount() { // функция стирающая текст из клеток (нули и кресты)
  for (let i of cells) {
    i.innerText = ''

  }
}

function checkWin() { // функция проверяющая контент содержащийся в клетках
  for (let i of cells) {
    console.log()
    if (cells[0].innerText === 'X' &&
      cells[1].innerText === 'X' &&
      cells[2].innerText === 'X') {
      console.log(123)
      popup.classList.add('popup_show')
      content.innerText = 'Crosses win'

    } else if (cells[0].innerText === 'O' &&
      cells[1].innerText === 'O' &&
      cells[2].innerText === 'O') {
      console.log(123)
      popup.classList.add('popup_show')
      content.innerText = 'Zeros win'

    } else if (cells[3].innerText === 'X' &&
      cells[4].innerText === 'X' &&
      cells[5].innerText === 'X') {
      console.log(123)
      popup.classList.add('popup_show')
      content.innerText = 'Crosses win'

    } else if (cells[3].innerText === 'O' &&
      cells[4].innerText === 'O' &&
      cells[5].innerText === 'O') {
      console.log(123)
      popup.classList.add('popup_show')
      content.innerText = 'Zeros win'

    } else if (cells[6].innerText === 'X' &&
      cells[7].innerText === 'X' &&
      cells[8].innerText === 'X') {
      console.log(123)
      popup.classList.add('popup_show')
      content.innerText = 'Crosses win'

    } else if (cells[6].innerText === 'O' &&
      cells[7].innerText === 'O' &&
      cells[8].innerText === 'O') {
      console.log(123)
      popup.classList.add('popup_show')
      content.innerText = 'Zeros win'

    } else if (cells[0].innerText === 'X' &&
      cells[3].innerText === 'X' &&
      cells[6].innerText === 'X') {
      console.log(123)
      popup.classList.add('popup_show')
      content.innerText = 'Crosses win'

    } else if (cells[0].innerText === 'O' &&
      cells[3].innerText === 'O' &&
      cells[6].innerText === 'O') {
      console.log(123)
      popup.classList.add('popup_show')
      content.innerText = 'Zeros win'

    } else if (cells[1].innerText === 'X' &&
      cells[4].innerText === 'X' &&
      cells[7].innerText === 'X') {
      console.log(123)
      popup.classList.add('popup_show')
      content.innerText = 'Crosses win'

    } else if (cells[1].innerText === 'O' &&
      cells[4].innerText === 'O' &&
      cells[7].innerText === 'O') {
      console.log(123)
      popup.classList.add('popup_show')
      content.innerText = 'Zeros win'

    } else if (cells[2].innerText === 'X' &&
      cells[5].innerText === 'X' &&
      cells[8].innerText === 'X') {
      console.log(123)
      popup.classList.add('popup_show')
      content.innerText = 'Crosses win'

    } else if (cells[2].innerText === 'O' &&
      cells[5].innerText === 'O' &&
      cells[8].innerText === 'O') {
      console.log(123)
      popup.classList.add('popup_show')
      content.innerText = 'Zeros win'

    } else if (cells[6].innerText === 'X' &&
      cells[7].innerText === 'X' &&
      cells[8].innerText === 'X') {
      console.log(123)
      popup.classList.add('popup_show')
      content.innerText = 'Crosses win'

    } else if (cells[6].innerText === 'O' &&
      cells[7].innerText === 'O' &&
      cells[8].innerText === 'O') {
      console.log(123)
      popup.classList.add('popup_show')
      content.innerText = 'Zeros win'

    } else if (cells[2].innerText === 'X' &&
      cells[4].innerText === 'X' &&
      cells[6].innerText === 'X') {
      console.log(123)
      popup.classList.add('popup_show')
      content.innerText = 'Crosses win'

    } else if (cells[2].innerText === 'O' &&
      cells[4].innerText === 'O' &&
      cells[6].innerText === 'O') {
      console.log(123)
      popup.classList.add('popup_show')
      content.innerText = 'Zeros win'

    } else if (cells[0].innerText === 'X' &&
      cells[4].innerText === 'X' &&
      cells[8].innerText === 'X') {
      console.log(123)
      popup.classList.add('popup_show')
      content.innerText = 'Crosses win'

    } else if (cells[0].innerText === 'O' &&
      cells[4].innerText === 'O' &&
      cells[8].innerText === 'O') {
      console.log(123)
      popup.classList.add('popup_show')
      content.innerText = 'Zeros win'

    } else if (cells[0].innerText !== '' &&
      cells[1].innerText !== '' &&
      cells[2].innerText !== '' &&
      cells[3].innerText !== '' &&
      cells[4].innerText !== '' &&
      cells[5].innerText !== '' &&
      cells[6].innerText !== '' &&
      cells[7].innerText !== '' &&
      cells[8].innerText !== '') {
      console.log('Ничья')
      popup.classList.add('popup_show')
      content.innerText = 'Draw'
    }

  }
}