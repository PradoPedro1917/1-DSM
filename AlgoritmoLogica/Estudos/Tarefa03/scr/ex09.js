senha = "abc";
entrada = "";
i = 0 
while (senha != entrada && i < 3 );{
    entrada = prompt("Entre com a senha")
    if (entrada == senha){
        console.log("Acesso Liberado")
    }
    else{
        console.log("Acesso Negado")
    }
}
if (i == 3){
    console.log("Excedeu o número de tentivas")
}