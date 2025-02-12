function exer10() {
    if (typeof exer10.totalnomes === "undefined") {
        exer10.totalnomes = 0;
    }
    
    var entrada = document.getElementById("entrada").value;
    
    if (entrada.trim() !== ""){
        var novoparagrafo = document.createElement("li");
        
        novoparagrafo.innerText = entrada;

        novoparagrafo.addEventListener("mouseover", function() {
            novoparagrafo.title = "Nome Fornecido";
        });

        document.getElementById("saida").appendChild(novoparagrafo);

        exer10.totalnomes++;

        document.getElementById("total").innerText = exer10.totalnomes;
    
        document.getElementById("entrada").value = "";
    } else {
        alert("Por favor, digite um nome valido!");
    }
  }