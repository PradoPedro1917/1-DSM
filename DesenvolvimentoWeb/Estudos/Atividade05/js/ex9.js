function exer9() {
    if (typeof exer9.totalnomes === "undefined") {
        exer9.totalnomes = 0;
    }
    
    var entrada = document.getElementById("entrada").value;
    
    if (entrada.trim() !== ""){
        var novoparagrafo = document.createElement("li");
        
        novoparagrafo.innerText = entrada;

        novoparagrafo.addEventListener("mouseover", function() {
            novoparagrafo.title = "Nome Fornecido";
        });

        document.getElementById("saida").appendChild(novoparagrafo);

        exer9.totalnomes++;

        document.getElementById("total").innerText = exer9.totalnomes;
    
        document.getElementById("entrada").value = "";
    }
  }