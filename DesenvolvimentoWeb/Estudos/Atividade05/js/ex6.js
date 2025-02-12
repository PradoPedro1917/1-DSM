function exer6() {
    
    var entrada = document.getElementById("entrada").value;
    
    if (entrada.trim() !== ""){
        var novoparagrafo = document.createElement("p");
        
        novoparagrafo.innerText = entrada;

        novoparagrafo.addEventListener("mouseover", function() {
            novoparagrafo.title = "Nome Fornecido";
        });

        document.getElementById("saida").appendChild(novoparagrafo);
    
        document.getElementById("entrada").value = "";
    }
  }