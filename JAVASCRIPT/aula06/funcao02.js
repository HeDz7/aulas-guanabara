function soma(n1, n2) {
  return n1+n2
}

console.log(soma(7)) // o numero 7 vai para a posição n1 e o n2 fica 'undefined', então o resultado será NaN (not a number)

function subtrair(m1=0, m2=0) {
  return m1-m2
}

console.log(subtrair(2, 5)) // resultado -3, o numero 2 vai para posição m1 e o 5 vai para posição m2, e se tirarmos o 5 por exemplo, será 2 - 0 (0 valor base constatado no m2=0)