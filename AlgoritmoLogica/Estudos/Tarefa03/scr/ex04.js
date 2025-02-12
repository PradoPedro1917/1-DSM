menor = prompt("Entre com o menor valor")
menor = parseInt(menor)
maior = prompt("Entre com o maior valor")
maior = parseInt(maior)
soma = 0
if (menor > maior){
    aux = menor
    menor = maior
    maior = aux
}
soma = menor + maior 
while (menor <= maior){
    console.log("Somatório", soma)
    menor = menor + 1
}
