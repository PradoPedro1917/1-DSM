entrada = prompt("Entre com os números separados por virgulas")
nro = entrada.split(",")
s = 0
for (i = 0; i < nro.length; i++){
  s += parseInt (nro[i])   
}
console.log("Somatória", s)
