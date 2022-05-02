var h2 = document.getElementsByTagName('h2')[0]

var h = new Date()
var hora = h.getHours()
var img = document.getElementById('img')

img.style.borderRadius = '50%'
img.style.width = '400px'
img.style.height = '400px'

if (hora >= 00 && hora <= 6) {
  h2.innerText = 'Boa madrugada'
  document.body.style.background = 'darkblue'
  h2.style.color = 'white'
  img.src = 'madruga.jpg'
  img.style.boxShadow = '2px 2px 5px white'

} else if (hora < 12) {
  h2.innerText = 'Bom dia'
  document.body.style.background = 'lightblue'
  h2.style.color = 'black'
  img.src = 'manha.jpg'
  img.style.boxShadow = '5px 5px 10px black'

} else if (hora < 18) {
  h2.innerText = 'Boa tarde'
  document.body.style.background = 'lightorange'
  h2.style.color = 'black'
  img.src = 'tarde.jpg'
  img.style.boxShadow = '5px 5px 10px black'

} else {
  h2.innerText = 'Boa noite'
  img.src = 'noite.jpg'
  document.body.style.background = 'black'
  h2.style.color = 'white'
  img.style.boxShadow = '2px 2px 5px white'
}

function select() {
  var masc = document.getElementsByClassName('radsex')[0]
  var femi = document.getElementsByClassName('radsex')[1]

  var pic = document.getElementsByClassName('picture')[0]

  if (masc.checked) {
    pic.src = 'homem.png'
  } else if (femi.checked) {
    pic.src = 'mulher.png'
  }
}