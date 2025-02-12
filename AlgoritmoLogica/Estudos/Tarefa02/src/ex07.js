a = prompt("Entre com um número")
a = parseInt(a)
b = prompt("Entre com outro numero")
b = parseInt(b)
c = prompt("Entre com o terceiro número")
c = parseInt(c)

 if (a >= b && a >= c){
    console.log("Maior", a)
 }
    if(b >= a && b >= c){
        console.log("Maior", b)
    }
        if(c >= a && c >= b) {
            console.log("Maior", c)
        }   