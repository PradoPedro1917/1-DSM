menor = prompt("Entre com o menor valor")
menor = parseInt(menor)
maior = prompt("Entre com o maior valor")
maior = parseInt(maior)
if (menor > maior){
    aux = menor
    menor = maior
    maior = aux
}
while (menor <= maior){
    console.log(menor)
    menor = menor + 1
}
