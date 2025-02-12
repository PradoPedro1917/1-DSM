i = 0
menor = Infinity
while (i < 5){
    num = prompt("Entre com um numero")
    num = parseInt(num)
    if (num < menor){
        menor =  num
    }
    i = i + 1
}
console.log("Menor valor", menor)