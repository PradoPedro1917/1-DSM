entrada = prompt("Entre com os números separados por virgulas")
nro = entrada.split(",")
for (i = 0; i < nro.length; i++){
    if(parseInt(nro[i]) % 2 == 0){
        console.log(nro[i])
    }  
}

