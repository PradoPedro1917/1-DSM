function exer5() {
    
    var entrada = document.getElementById("entrada").value;
    
    if (entrada.trim() !== ""){
        var novoparagrafo = document.createElement("p");
        
        novoparagrafo.innerText = entrada;

        document.getElementById("saida").appendChild(novoparagrafo);
    
        document.getElementById("entrada").value = "";
    }
  }