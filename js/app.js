let contador = 0;
let contadorNovo = 0;
let retornaLista = false;
function adicionaItem() {
    if (contador > 11) {
        alert("Chegou ao limite da lista");
        return;
    }

    let li = document.createElement("li");
    li.addEventListener("click", adicionaListaNova);

    let item = document.getElementById("item").value;
    let itemLi = document.createTextNode(item);
    li.appendChild(itemLi);
    if(item === ''){
        alert("Você precisa digitar algo para adicionar!");
    }else{
        document.getElementById("lista-fazer-li").appendChild(li);
        retornaLista = true;
        contador++;
    }
    document.getElementById("item").value = "";
    console.log("Incrementa lista fazer: " + contador);
}

function adicionaListaNova(evento) {
    const el = evento.target;
    const listaFeito = document.getElementById("lista-feito-li");

    if (contadorNovo > 11) {
        alert("Chegou ao limite da lista nova!");
        return;
    }

    console.log(retornaLista)
    if(!retornaLista){
        console.log("entrou para retornar")
        listaFeito.addEventListener("click", retornaListaAntiga);
    }

    if(el && listaFeito && retornaLista){
        listaFeito.appendChild(el);
        contadorNovo++;
        contador--;
        retornaLista = false; 
    }
    console.log("Incrementa lista feito: " + contadorNovo);
    console.log("Decrementa lista fazer: " + contador);
}

function retornaListaAntiga(evento) {
    const el = evento.target;
    const listaAntiga = document.getElementById("lista-fazer-li");
    
    console.log("Contador antes de retornar " + contador);

    if (el && listaAntiga){
        listaAntiga.appendChild(el);
        contadorNovo--;
    }
    retornaLista = true;
    contador++; 
    console.log("Decrementa lista nova ao retornar: " + contadorNovo);
    console.log("Incrementa lista fazer ao retornar: " + contador )
}

document.addEventListener("DOMContentLoaded", function(){
    const adicionar = document.getElementById("btn-add");
    adicionar.addEventListener('click', adicionaItem);
})