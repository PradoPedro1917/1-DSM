peso = prompt("Entre com o seu peso (Kg)")
peso = parseFloat(peso)
altura = prompt("Entre com a sua altura (m)")
altura = parseFloat(altura)

imc = peso / (altura * altura)
console.log(imc)