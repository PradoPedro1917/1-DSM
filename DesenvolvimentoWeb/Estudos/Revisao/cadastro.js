document.getElementById('CadAnimais').addEventListener('subit', function(event){
    event.preventDefault(); // impede o recarregamento da pagina
    const nome = document.getElementById('nome').value.trim();
    const ordem = document.getElementById('ordem').value.trim();
    const classe = document.getElementById('classe').value;
    
    if(nome && ordem && classe)
    {
        const li = document.createElement('li')
        li.textContent = `Nome: ${nome}, Ordem: ${ordem}, Classe: ${classe}`
        document.getElementById('listaAnimais').appendChild(li);
    }
    else{
        alert('Conferir o preenchimento de todos os campos!!!')
    }
    });