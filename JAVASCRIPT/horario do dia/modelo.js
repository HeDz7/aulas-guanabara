function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('img')
  var title = document.getElementsByTagName('h1')[1]
  var logo = document.getElementById('logo')

  var data = new Date()

  var hora = data.getHours()
  var minute = data.getMinutes()
  var second = data.getSeconds()

  title.innerHTML = `Agora são ${hora}H:${minute}m:${second}s`

  if (hora >= 0 && hora <= 6) {
    img.src = 'madruga.png'
    document.body.style.background = '#022d7c'
    msg.innerHTML = '<strong>Boa Madrugada!</strong>'

  } else if (hora < 12) {
    img.src = 'manha.png'
    document.body.style.background = '#bfddff'
    msg.innerHTML = '<strong>Bom dia!</strong>'

  } else if (hora >= 12 && hora <= 18) {
    img.src = 'tarde.png'
    document.body.style.background = '#ffdf94'
    msg.innerHTML = '<strong>Boa tarde!</strong>'

  } else {
    img.src = 'noite.png'
    document.body.style.background = '#192114'
    msg.innerHTML = '<strong>Boa noite!</strong>'
    logo.style.color = 'white'

  }
}
