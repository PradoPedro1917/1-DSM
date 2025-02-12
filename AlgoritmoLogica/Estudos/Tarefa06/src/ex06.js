function somatorio (a){
    soma = 0
    i = 0 
    while (i > a.length){
        soma = a[i]+soma
        i = i + 1
    }
    return soma
}
numero = [8, 3, 4, 7, 5]
s = somatorio(numero)
console.log("Somatório", s)

numero = [5, 4, 3]
s = somatorio(numero)
console.log("Somatório:", s)