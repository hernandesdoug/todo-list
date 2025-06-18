let contador = 0;
let contadorNovo = 0;

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

    if (item === '') {
        alert("Você precisa digitar algo para adicionar!");
    } else {
        document.getElementById("lista-fazer").appendChild(li);
        contador++;
    }

    document.getElementById("item").value = "";
}

function adicionaListaNova(evento) {
    const el = evento.target;
    const listaFeito = document.getElementById("lista-feito");
    
    if (contadorNovo > 11) {
        alert("Chegou ao limite da lista nova!");
        return;
    }
    
    el.removeEventListener("click", adicionaListaNova);
    el.addEventListener("click", retornaListaAntiga);
    listaFeito.appendChild(el);
    contadorNovo++;
    contador--;
}

function retornaListaAntiga(evento) {
    const el = evento.target;
    const listaAntiga = document.getElementById("lista-fazer");

    el.removeEventListener("click", retornaListaAntiga);
    el.addEventListener("click", adicionaListaNova);
    listaAntiga.appendChild(el);
    contadorNovo--;
    contador++;
}

document.addEventListener("DOMContentLoaded", function(){
    const adicionar = document.getElementById("btn-add");
    adicionar.addEventListener('click', adicionaItem);
})