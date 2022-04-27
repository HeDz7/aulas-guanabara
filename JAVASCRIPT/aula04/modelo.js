function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('img')
  var title = document.getElementsByTagName('h1')[0]

  var data = new Date()
  
  var hora = data.getHours()
  var minute = data.getMinutes()
  
  title.innerHTML = `Agora são ${hora}H ${minute}m`

  if (hora >= 0 && hora < 12) {
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
  }
}
