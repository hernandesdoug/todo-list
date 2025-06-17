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
    if(item === ''){
        alert("Você precisa digitar algo para adicionar!");
    }else{
        document.getElementById("lista-fazer-li").appendChild(li);
    }
    document.getElementById("item").value = "";
    contador++;
}

function adicionaListaNova(evento) {
    const el = evento.target;
    const listaFeito = document.getElementById("lista-feito-li");

    listaFeito.addEventListener("click", retornaListaAntiga);

    if(el && listaFeito && contadorNovo < 12){
        contadorNovo++;
        listaFeito.appendChild(el);
        contador--;
    }
}

function retornaListaAntiga(evento) {
    const el = evento.target;
    const listaAntiga = document.getElementById("lista-fazer-li");

    if (el && listaAntiga){
        console.log(contador);
        contador++;
        listaAntiga.appendChild(el);
        contadorNovo--;
    }
}

document.addEventListener("DOMContentLoaded", function(){
    const adicionar = document.getElementById("btn-add");
    adicionar.addEventListener('click', adicionaItem);
})