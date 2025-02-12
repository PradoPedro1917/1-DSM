function exer4() {   
    var nome = "Ana Maria";

    var novoparagrafo = document.createElement("p");

    novoparagrafo.innertext = nome;

    document.getElementById("saida").appendChild(novoparagrafo);
  }