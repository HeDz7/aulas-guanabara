// change background
let main = document.querySelector('.principal')

main.addEventListener('click', () => {
  alert('salve')
})

let squads = document.querySelectorAll('.squad')

function changeBG(e) {
  main.style.backgroundColor = e.path[0].attributes[1].nodeValue
}

squads.forEach(squad => {
  squad.addEventListener('mouseover', changeBG)
})

// print input value
let input = document.querySelector('#text')

let textPrint = document.querySelector('.text-input')

let btn = document.querySelector('#btn-print')

btn.addEventListener('click', () => {
  textPrint.innerHTML += input.value
})
