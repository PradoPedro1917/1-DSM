senha = "abc";
entrada = "";
while (senha != entrada);{
    entrada = prompt("Entre com a senha")
    if (entrada == senha){
        console.log("Acesso Liberado")
    }
    else{
        console.log("Acesso Negado")
    }
}