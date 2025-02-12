entrada = prompt("Entre com os números separados por virgulas")
nro = entrada.split(",")
soma = 0
for (i = 0; i < nro.length; i+=2){
    soma += parseInt(nro[1])  
}
console.log("Somatório", soma)