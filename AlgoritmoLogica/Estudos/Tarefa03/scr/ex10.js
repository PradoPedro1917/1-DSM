i = 0
soma = 0 
while (soma < 20){
    num = prompt("Entre com um numero")
    num = parseInt(num)
    if (num > maior){
        maior =  num
    }
    soma = soma + num
}
console.log("Soma", soma)