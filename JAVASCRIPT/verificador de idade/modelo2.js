function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fAno = document.getElementById('txtano')
  var res = document.getElementById('res')
  
  if (fAno.value < 1900 || fAno.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fSex = document.getElementsByName('radsex')
    var idade = ano - Number(fAno.value)
    var genero = ''

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fSex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10){
        //CRIANÇA
        img.setAttribute('src', 'garoto.png')
      } else if (idade < 21){
        //JOVEM
        img.setAttribute('src', 'jovemM.png')
      } else if (idade < 50) {
        //ADULTO
        img.setAttribute('src', 'homem.png')
      } else {
        //IDOSO
        img.setAttribute('src', 'idoso.png')
      }
    } else if (fSex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10){
        //CRIANÇA
        img.setAttribute('src', 'garota.png')
      } else if (idade < 21){
        //JOVEM
        img.setAttribute('src', 'jovemF.png')
      } else if (idade < 50) {
        //ADULTO
        img.setAttribute('src', 'mulher.png')
      } else {
        //IDOSO
        img.setAttribute('src', 'idosa.png')
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}
