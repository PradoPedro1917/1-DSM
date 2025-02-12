function inverter(a){ 
    i = 0 
    saida = ""
    while (i < a.length){
        saida = a[i] + saida
        i = i + 1
        
    }
    return saida;
}

r = inverter("Pedro")
console.log("Invertido:", r)

r = inverter("Mariana")
console.log("Invertido:", r)