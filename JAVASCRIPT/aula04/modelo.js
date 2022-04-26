function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('img')
  var data = new Date()
  var hora = data.getHours()
  
  msg.innerHTML = `Agora são ${hora} horas.`

  if (hora >= 0 && hora < 12) {
    img.innerHTML = '<img src="manha.png">'  
    document.body.style.background = '#efefe7'

  } else if (hora >= 12 && hora <= 18) {
    img.innerHTML = '<img src="tarde.png">' 
    document.body.style.background = '#f6f5c4'

  } else {
    img.innerHTML = '<img src="noite.png">' 
    document.body.style.background = '#192114'
  }
}
