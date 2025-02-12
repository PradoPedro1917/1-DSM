i = 0
maior = -Infinity
while (i < 5){
    num = prompt("Entre com um numero")
    num = parseInt(num)
    if (num > maior){
        maior =  num
    }
    i = i + 1
}
console.log("Maior valor", maior)