nome = prompt("Entre com um nome")
pos = 0

while(pos < nome.length){
    if( pos % 2 == 0){
        console.log(nome [pos]);
    }
    pos = pos + 1;
}
