function inverter (lista){
    i = lista.lenght - 1;
    while (i >= 0){
        console.log(i,":", lista[i])
        i=i-1
    }
}

console.log("lista:");
numeros = [8, 3, 4, 7, 5];
inverter(numeros);

console.log("lista:");
numeros = [3, 4, 5];
inverter(numeros);

